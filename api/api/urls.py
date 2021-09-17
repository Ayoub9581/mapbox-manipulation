from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from mapsowit.views import SowitMapViewSet

router = DefaultRouter(trailing_slash=True)

router.register(r"plots", SowitMapViewSet, basename="plot")

urlpatterns = [
    path("v0/", include(router.urls)),
    path("admin/", admin.site.urls),
]
