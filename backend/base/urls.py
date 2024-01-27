from django.urls import path
from .views import GetRoutesAPIView

urlpatterns = [
     path('', GetRoutesAPIView.as_view(), name='api_routes'),
]