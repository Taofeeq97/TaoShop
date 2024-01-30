from django.urls import path
from ..views.products_views import (
    ProductListAPIView,
    ProductDetailAPIView
)


urlpatterns = [
    path('', ProductListAPIView.as_view(), name='product_list'),
    path('<int:pk>/', ProductDetailAPIView.as_view(), name='product_detail'),
]