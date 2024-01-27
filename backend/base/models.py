from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Product(models.Model):
    user=models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name=models.CharField(max_length=225, null=True, blank=True)
    brand=models.CharField(max_length=225, null=True, blank=True)
    # image=models.ImageField(upload_to='product/image')
    category=models.CharField(max_length=225, null=True, blank=True)
    description=models.TextField(max_length=225, null=True, blank=True)
    rating=models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    numReviews = models.IntegerField(null=True, blank=True)
    price=models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    countInStock = models.IntegerField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.name
    

