# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-11-02 12:22
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserJWT',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('jwt_sub', models.CharField(max_length=64, unique=True)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
