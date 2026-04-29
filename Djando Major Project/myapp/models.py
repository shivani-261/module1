from django.db import models

# Create your models here.
class User(models.Model):
    usertype=(
        ("buyer","buyer"),
        ("seller","seller"),
    )
    fname=models.CharField(max_length=100)
    lname=models.CharField(max_length=100)
    email=models.EmailField()
    mobile=models.PositiveIntegerField()
    address=models.TextField()
    password=models.CharField(max_length=100)
    profile_picture=models.ImageField(upload_to="profile_picture/")
    user_type=models.CharField(max_length=100,choices=usertype)
    def __str__(self):
        return self.fname+" "+self.lname