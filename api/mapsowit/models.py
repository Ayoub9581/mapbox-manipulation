from django.db import models


from api.utils import DateTimeModel, _nullable_field_


class MapSowit(DateTimeModel):
    name = models.CharField(max_length=200)
    geojson = models.JSONField(**_nullable_field_)
    image_url_plot = models.TextField(default="")
    area = models.CharField(max_length=5, default="0 ha")

    def __str__(self):
        return self.name
