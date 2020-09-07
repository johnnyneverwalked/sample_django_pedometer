from django.urls import path
from . import views

urlpatterns = [
    path("", views.retrieve),
    path("create", views.create),
    path("edit/<int:_id>", views.findByIdOrUpdate),
    path("date/<slug:date>", views.findByDate)
]
