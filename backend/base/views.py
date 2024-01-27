from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .products import products



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
    def get(self, request):
        return Response(products)
    

class ProductDetailAPIView(APIView):

    def get(self, request, pk):

        product=None
        for i in products:
            if i['_id'] == str(pk):
                product = i
              
                break
        return Response(product)
