from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product


class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = (
            "id",
            "user",
            "name",
            "brand",
            "image",
            "category",
            "description",
            "rating",
            "numReviews",
            "price",
            "countInStock",
            "created_at",
            "updated_at",
        )