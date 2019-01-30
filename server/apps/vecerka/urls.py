from django.conf.urls import url

from .views import MarkerListAPIView, AddMarkerAPIView


urlpatterns = [
    url(r'^markers/$', MarkerListAPIView.as_view(), name='marker_list'),
    url(r'^add-marker/$', AddMarkerAPIView.as_view(), name='add_marker'),
]
