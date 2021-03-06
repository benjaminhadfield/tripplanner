# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-11-02 12:22
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion
import redactor.fields
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('user_jwt', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Trip',
            fields=[
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('content', redactor.fields.RedactorField(blank=True)),
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=60)),
                ('active', models.BooleanField(default=True)),
                ('users', models.ManyToManyField(to='user_jwt.UserJWT')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='TripLocation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('longitude', models.DecimalField(decimal_places=7, max_digits=10)),
                ('latitude', models.DecimalField(decimal_places=7, max_digits=10)),
                ('arrive', models.DateTimeField(blank=True, null=True)),
                ('depart', models.DateTimeField(blank=True, null=True)),
                ('travel_type', models.PositiveSmallIntegerField(blank=True, choices=[(0, 'Walk'), (1, 'Train'), (2, 'Flight'), (3, 'Boat'), (4, 'Cycle'), (5, 'Bus'), (6, 'Drive'), (7, 'Taxi')], null=True)),
                ('trip', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='trip.Trip')),
            ],
        ),
        migrations.AlterUniqueTogether(
            name='triplocation',
            unique_together=set([('trip', 'arrive')]),
        ),
    ]
