
from django.contrib import admin
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from mmodel.views import call_model
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    # Adding a new URL
    path('model/', call_model.as_view()),
    path('', TemplateView.as_view(template_name="index.html")),
]