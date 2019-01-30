from django.conf.urls import url, include

urlpatterns = [
    url(r'^vecerka/', include('apps.vecerka.urls', namespace='vecerka'))
]
