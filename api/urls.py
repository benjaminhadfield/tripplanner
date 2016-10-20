from django.conf.urls import url

from rest_framework.urlpatterns import format_suffix_patterns

from trip import views as trip_views


app_name = 'api'

urlpatterns = [
    url(r'^trips/?$', trip_views.TripList.as_view()),
    url(r'^trips/(?P<uuid>[\w-]+)/?$', trip_views.TripDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)