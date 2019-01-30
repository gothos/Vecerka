from rest_framework.generics import ListAPIView, GenericAPIView
from rest_framework.parsers import FileUploadParser, MultiPartParser
from rest_framework import permissions
from .serializers import MarkerSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Marker


class MarkerListAPIView(ListAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = MarkerSerializer
    #queryset = Marker.objects.all()

    def get_queryset(self):
        return Marker.objects.all()


class AddMarkerAPIView(APIView):
    parser_classes = (MultiPartParser,)

    def post(self, request, *args, **kwargs):
        data = request.data
        print('request data', request.data)
        Marker.objects.create(longitude=data['longitude'], latitude=data['latitude'], title=data['title'], description=data['description'], photo=data['photo'])

        return Response()
