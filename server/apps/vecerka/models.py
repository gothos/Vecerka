from django.db import models


class Marker(models.Model):
    longitude = models.DecimalField(
        max_digits=20,
        decimal_places=12)
    latitude = models.DecimalField(
        max_digits=20,
        decimal_places=12)
    title = models.CharField('title', max_length=100)
    description = models.CharField('description', max_length=300)
    photo = models.ImageField(upload_to='fotky_vecerek')
