from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('doctors/', views.doctors, name='doctors'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),

    path('book-appointment/<int:id>/', views.book_appointment, name='book_appointment'),

    path('doctor-add/', views.doctor_add, name='doctor_add'),
    path('doctor-edit/<int:id>/', views.doctor_edit, name='doctor_edit'),
    path('doctor-delete/<int:id>/', views.doctor_delete, name='doctor_delete'),

    path('signup/', views.signup, name='signup'),
    path('login/', views.user_login, name='login'),
    path('logout/', views.user_logout, name='logout'),
    
    path('payment/<int:id>/', views.payment, name='payment'),
    path('payment-success/<int:id>/', views.payment_success, name='payment_success'),
    path('payment-failed/<int:id>/', views.payment_failed, name='payment_failed'),
]