from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Product(models.Model):
    user=models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name=models.CharField(max_length=225, null=True, blank=True)
    brand=models.CharField(max_length=225, null=True, blank=True)
    image=models.ImageField(upload_to='product', null=True, blank=True)
    category=models.CharField(max_length=225, null=True, blank=True)
    description=models.TextField(max_length=225, null=True, blank=True)
    rating=models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    numReviews = models.IntegerField(default=0)
    price=models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    countInStock = models.IntegerField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.name


class Review(models.Model):
    user=models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=50, null=True, blank=True)
    rating  = models.IntegerField(default=0)
    comment = models.TextField(null=True, blank=True)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self) -> str:
        return self.name


class Order(models.Model):
    user=models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    payment_method = models.CharField(max_length=20, null=True, blank=True)
    shipping_price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    total_price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    is_paid = models.BooleanField(default=False)
    paid_at = models.DateTimeField(null=True)
    is_shipped = models.BooleanField(default=False)
    shipped_at = models.DateTimeField(null=True)
    is_delivered = models.BooleanField(default=False)
    delivered_at = models.DateTimeField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.user.first_name



class OrderItem(models.Model):
    Product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=50, null=True, blank=True)
    quantity = models.IntegerField(default=0)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    image=models. CharField(max_length = 200, blank=True, null=True)

    def __str__(self) -> str:
        return self.Product.name





