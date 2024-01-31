from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.exceptions import ValidationError
from django.contrib.auth.models import User
from rest_framework_simplejwt.views import TokenObtainPairView

from ..serializers import (
    UserSerializer,
    MyTokenObtainPairSerializer,
    UserSerializerWithToken
    )

class RegisterUserAPIView(APIView):
    serializer_class = UserSerializerWithToken

    def post(self, request):
        data = request.data
        existing_user = User.objects.filter(email=data['email'])
        if existing_user:
            raise ValidationError('user with this email already exist')
        else:
            user=User.objects.create(
                first_name=data['name'],
                username=data['email'],
                email=data['email'],
            )
            user.set_password(data['password'])
            user.save()

            serializer = self.serializer_class(user)
            return Response(serializer.data)


class UpdateUserProfileAPIView(APIView):
    serializer_class = UserSerializerWithToken
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        user = request.user
        serializer = self.serializer_class(user)
        data = request.data
        user.first_name = data['name']
        user.email = data['email']
        user.username = data['email']

        if data['password'] != '':
            user.set_password(data['passwors'])
        
        user.save()
        return Response(serializer.data)
    

class UserProfileAPIView(APIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        user = request.user
        serializer = self.serializer_class(user)
        return Response(serializer.data)


class UserListAPIView(APIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAdminUser]

    def get(self, request):
        users = User.objects.all()
        serializer = self.serializer_class(users, many=True)
        return Response(serializer.data)


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    