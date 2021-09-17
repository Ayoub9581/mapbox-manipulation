"""
Plot' related views:
    * SowitMapViewSet for CRUD 
        * List of plots
        * Create a plot 
        * Delete a plot
        * Update a plot

"""
from rest_framework.viewsets import ModelViewSet
from mapsowit.serializers import SowitMapSerializer
from mapsowit.models import MapSowit


class SowitMapViewSet(ModelViewSet):
    serializer_class = SowitMapSerializer
    permission_classes = []
    authentication_classes = []
    queryset = MapSowit.objects.all()
