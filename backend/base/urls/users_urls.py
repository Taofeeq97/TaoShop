from django.urls import path
from ..views.users_views import (
    MyTokenObtainPairView,
    UserProfileAPIView,
    UserListAPIView,
    RegisterUserAPIView,
    UpdateUserProfileAPIView
    )

urlpatterns = [
    path('', UserListAPIView.as_view(), name='user_list'),
    path('login', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register', RegisterUserAPIView.as_view(), name='register_user'),
    path('profile', UserProfileAPIView.as_view(), name='user_profile'),
    path('profile/update', UpdateUserProfileAPIView.as_view(), name='update_profile'),
]