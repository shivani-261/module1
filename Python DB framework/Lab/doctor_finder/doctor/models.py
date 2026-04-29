from django.db import models

class Doctor(models.Model):
    name = models.CharField(max_length=100)
    speciality = models.CharField(max_length=100)
    experience = models.CharField(max_length=50)
    image = models.ImageField(upload_to='doctors/', blank=True, null=True)
    fees = models.IntegerField()
    availability = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Appointment(models.Model):
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    patient_name = models.CharField(max_length=100)
    email = models.EmailField()
    mobile = models.CharField(max_length=10)
    date = models.DateField()
    time = models.TimeField()
    message = models.TextField(blank=True)

    def __str__(self):
        return self.patient_name
    
class Payment(models.Model):
    appointment = models.ForeignKey(Appointment, on_delete=models.CASCADE)
    amount = models.IntegerField()
    razorpay_order_id = models.CharField(max_length=100, blank=True, null=True)
    razorpay_payment_id = models.CharField(max_length=100, blank=True, null=True)
    razorpay_signature = models.CharField(max_length=200, blank=True, null=True)
    payment_status = models.CharField(max_length=50, default="Pending")
    payment_method = models.CharField(max_length=50, default="Razorpay")
    transaction_id = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.appointment.patient_name