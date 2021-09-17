from rest_framework import serializers
from mapsowit.models import MapSowit


class SowitMapSerializer(serializers.ModelSerializer):
    class Meta:
        model = MapSowit
        fields = ["id", "name", "geojson", "image_url_plot"]
