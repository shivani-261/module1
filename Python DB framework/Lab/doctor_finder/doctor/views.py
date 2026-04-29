from django.shortcuts import render, redirect
from .models import Doctor, Appointment ,Payment
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
import random
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
import razorpay

def home(request):
    return render(request, 'home.html')


def doctors(request):
    doctors = Doctor.objects.all()
    return render(request, 'doctors.html', {'doctors': doctors})


def book_appointment(request, id):
    doctor = Doctor.objects.get(id=id)

    if request.method == 'POST':
        appointment = Appointment.objects.create(
            doctor=doctor,
            patient_name=request.POST['patient_name'],
            email=request.POST['email'],
            mobile=request.POST['mobile'],
            date=request.POST['date'],
            time=request.POST['time'],
            message=request.POST['message']
        )

        return redirect('payment', appointment.id)

    return render(request, 'book_appointment.html', {'doctor': doctor})


def doctor_add(request):
    if request.method == 'POST':
        Doctor.objects.create(
            name=request.POST['name'],
            speciality=request.POST['speciality'],
            experience=request.POST['experience'],
            fees=request.POST['fees'],
            availability=request.POST['availability'],
            image=request.FILES.get('image')
        )
        return redirect('doctors')

    return render(request, 'doctor_add.html')


def doctor_edit(request, id):
    doctor = Doctor.objects.get(id=id)

    if request.method == 'POST':
        doctor.name = request.POST['name']
        doctor.speciality = request.POST['speciality']
        doctor.experience = request.POST['experience']
        doctor.fees = request.POST['fees']
        doctor.availability = request.POST['availability']

        if request.FILES.get('image'):
            doctor.image = request.FILES.get('image')

        doctor.save()
        return redirect('doctors')

    return render(request, 'doctor_edit.html', {'doctor': doctor})


def doctor_delete(request, id):
    doctor = Doctor.objects.get(id=id)
    doctor.delete()
    return JsonResponse({'status': 'deleted'})


def signup(request):
    msg = ''

    if request.method == 'POST':
        User.objects.create_user(
            username=request.POST['username'],
            email=request.POST['email'],
            password=request.POST['password']
        )
        msg = 'Signup Successfully!'

    return render(request, 'signup.html', {'msg': msg})


def user_login(request):
    msg = ''

    if request.method == 'POST':
        user = authenticate(
            username=request.POST['username'],
            password=request.POST['password']
        )

        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            msg = 'Invalid Username or Password'

    return render(request, 'login.html', {'msg': msg})


def user_logout(request):
    logout(request)
    return redirect('login')

def about(request):
    return render(request, 'about.html')

def contact(request):
    return render(request, 'contact.html')

def payment(request, id):
    appointment = Appointment.objects.get(id=id)
    amount = appointment.doctor.fees

    return render(request, 'payment.html', {
        'appointment': appointment,
        'amount': amount
    })



def payment_failed(request, id):
    appointment = Appointment.objects.get(id=id)

    Payment.objects.create(
        appointment=appointment,
        amount=appointment.doctor.fees,
        payment_status='Failed',
        payment_method='Paytm Demo',
        transaction_id='FAILED' + str(random.randint(100000, 999999))
    )

    return render(request, 'payment_failed.html', {'appointment': appointment})

def payment(request, id):
    appointment = Appointment.objects.get(id=id)

    client = razorpay.Client(auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET))

    amount = appointment.doctor.fees * 100

    razorpay_order = client.order.create({
        "amount": amount,
        "currency": "INR",
        "payment_capture": "1"
    })

    Payment.objects.create(
        appointment=appointment,
        amount=appointment.doctor.fees,
        razorpay_order_id=razorpay_order['id'],
        payment_status="Pending"
    )

    context = {
        "appointment": appointment,
        "amount": amount,
        "razorpay_order_id": razorpay_order['id'],
        "razorpay_key": settings.RAZORPAY_KEY_ID,
        "callback_url": "/payment-success/"
    }

    return render(request, "payment.html", context)


@csrf_exempt
def payment_success(request):
    if request.method == "POST":
        razorpay_order_id = request.POST.get("razorpay_order_id")
        razorpay_payment_id = request.POST.get("razorpay_payment_id")
        razorpay_signature = request.POST.get("razorpay_signature")

        client = razorpay.Client(auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET))

        try:
            client.utility.verify_payment_signature({
                "razorpay_order_id": razorpay_order_id,
                "razorpay_payment_id": razorpay_payment_id,
                "razorpay_signature": razorpay_signature
            })

            payment = Payment.objects.get(razorpay_order_id=razorpay_order_id)
            payment.razorpay_payment_id = razorpay_payment_id
            payment.razorpay_signature = razorpay_signature
            payment.payment_status = "Success"
            payment.save()

            return render(request, "payment_success.html", {"payment": payment})

        except:
            payment = Payment.objects.get(razorpay_order_id=razorpay_order_id)
            payment.payment_status = "Failed"
            payment.save()

            return render(request, "payment_failed.html")

    return redirect('home')