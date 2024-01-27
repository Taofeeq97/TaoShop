from django.shortcuts import render
from rest_framework.views import APIView
from django.http import JsonResponse



# Create your views here.

class GetRoutesAPIView(APIView):

    def get(self, request):
        return JsonResponse("Hello", safe=False)

