from django.db import models


class Day(models.Model):
    steps = models.IntegerField()
    date = models.DateField()
