from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .products import products
from .models import Product
from .serializers import ProductSerializer



# Create your views here.

class GetRoutesAPIView(APIView):

    def get(self, request):
        routes = [
            '/api/products/',
            '/api/products/create/',
            '/api/products/upload/',
            '/api/products/<id>/reviews/',
            '/api/products/top/',
            '/api/products/<id>/',
            '/api/products/<id>/delete/',
            '/api/products/<id>/update/'
        ]
        return Response(routes)


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
