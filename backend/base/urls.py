from django.urls import path
from .views import (
    GetRoutesAPIView,
    ProductListAPIView,
    ProductDetailAPIView,
    )

urlpatterns = [
     path('', GetRoutesAPIView.as_view(), name='api_routes'),
     path('products', ProductListAPIView.as_view(), name='product_list'),
     path('products/<int:pk>/', ProductDetailAPIView.as_view(), name='product_detail'),
]