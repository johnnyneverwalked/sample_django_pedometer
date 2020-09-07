from django.utils import timezone
from django.http.response import JsonResponse

from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Day
from .serializers import DaySerializer


@api_view(["POST"])
def retrieve(request):
    filters = {}
    try:
        filters = JSONParser().parse(request)
    except:
        pass

    if len(filters.keys()):
        days = Day.objects.filter(**filters)
    else:
        days = Day.objects.all()

    return JsonResponse(DaySerializer(days, many=True).data, safe=False)


@api_view(["POST"])
def create(request):
    day = JSONParser().parse(request)
    serializer = DaySerializer(data=day)
    if serializer.is_valid():
        serializer.save()
        return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)

    return JsonResponse(serializer.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


@api_view(["GET", "PUT"])
def findByIdOrUpdate(request, _id):
    try:
        day = Day.objects.get(pk=_id)
    except Day.DoesNotExist:
        if request.method == "GET":
            return JsonResponse({'message': 'Entry not found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        return JsonResponse(DaySerializer(day).data)

    elif request.method == "PUT":
        data = JSONParser().parse(request)
        serializer = DaySerializer(day, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


@api_view(["GET"])
def findByDate(request, date):
    try:
        _date = timezone.datetime.strptime(date, "%Y-%m-%d")
    except ValueError:
        return JsonResponse({"message": "Enter a valid date. format: YYYY-MM-DD"},
                            status=status.HTTP_422_UNPROCESSABLE_ENTITY)
    try:
        day = Day.objects.get(date=_date)
    except Day.DoesNotExist:
        return JsonResponse({"message": "date not found"}, status=status.HTTP_404_NOT_FOUND)
    except Day.MultipleObjectsReturned:
        day = Day.objects.filter(date=_date)[0]

    return JsonResponse(DaySerializer(day).data)
