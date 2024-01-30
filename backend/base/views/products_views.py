from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response

from ..models import Product
from ..serializers import (
    ProductSerializer,
    )
    

class ProductListAPIView(APIView):
    serializer_class = ProductSerializer

    def get(self, request):
        products = Product.objects.all()
        serializer = self.serializer_class(products, many=True)
        return Response(serializer.data)


class ProductDetailAPIView(APIView):
    serializer_class = ProductSerializer

    def get(self, request, pk):
        product = Product.objects.filter(id=pk).first()
        serializer = self.serializer_class(product)
        return Response(serializer.data)
