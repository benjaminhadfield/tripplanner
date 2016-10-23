from django.conf.urls import url

from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework.authtoken import views as authoken_views

from user import views as user_views
from trip import views as trip_views


app_name = 'api'

urlpatterns = [
    url(r'^api-token-auth/?$', authoken_views.obtain_auth_token),

    url(r'^user/?$', user_views.UserDetail.as_view()),

    url(r'^trips/?$', trip_views.TripList.as_view()),
    url(r'^trips/(?P<uuid>[\w-]+)/?$', trip_views.TripDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
