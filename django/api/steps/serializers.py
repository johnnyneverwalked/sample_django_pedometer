from rest_framework import serializers
from .models import Day


class DaySerializer(serializers.ModelSerializer):

    class Meta:
        model = Day
        fields = ("id", "steps", "date")
        extra_kwargs = {
            'steps': {'min_value': 1, 'max_value': 50000},
        }
