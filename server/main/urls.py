from django.conf.urls import include, url
from django.conf.urls.static import static
from django.conf import settings

print('wwww', settings.MEDIA_URL)
print('wwww', settings.MEDIA_ROOT)

urlpatterns = [
    url(r'^api/v1/', include('main.api_urls')),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
