from django.db import models
from django.utils.translation import gettext_lazy as _


class DateTimeModel(models.Model):
    created_at = models.DateTimeField(_("created_at"), auto_now_add=True)
    updated_at = models.DateTimeField(_("updated_at"), auto_now=True)

    class Meta:
        abstract = True


_nullable_field_ = dict(blank=True, null=True)
