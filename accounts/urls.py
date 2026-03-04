from django.urls import path
from .views import RegisterView, LoginView, LogoutView

urlpatterns = [
    # 🔐 API routes
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('logout/', LogoutView.as_view()),

]