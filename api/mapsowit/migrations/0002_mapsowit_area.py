# Generated by Django 3.2.7 on 2021-09-17 02:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("mapsowit", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="mapsowit",
            name="area",
            field=models.CharField(default="0 ha", max_length=5),
        ),
    ]
