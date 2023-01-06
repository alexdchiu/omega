# Generated by Django 3.2.7 on 2023-01-06 20:03

from django.db import migrations
import django_countries.fields


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='country',
            field=django_countries.fields.CountryField(default='United States of America', max_length=2, verbose_name='Country'),
        ),
    ]
