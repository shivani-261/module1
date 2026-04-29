from django.contrib import admin
from .models import Doctor, Appointment ,Payment

@admin.register(Doctor)
class DoctorAdmin(admin.ModelAdmin):
    list_display = ('name', 'speciality', 'experience', 'fees', 'availability')
    search_fields = ('name', 'speciality')
    list_filter = ('speciality',)


@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('patient_name', 'doctor', 'mobile', 'date', 'time')
    search_fields = ('patient_name', 'mobile')
    list_filter = ('date', 'doctor')

@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):
    list_display = (
        'appointment',
        'amount',
        'payment_status',
        'razorpay_payment_id'
    )