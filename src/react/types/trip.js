/* @flow */
'use strict'


export type TripSimple = {
    title: string,
    uuid: string,
}

export type Trip = {
    uuid: string,
    title: string,
    get_absolute_url: string,
    locations: Array<Location>,
    created: string,
    modified: string,
}

export type Location = {
    arrive: ?string,
    depart: ?string,
    latitude: string,
    longitude: string,
    title: string,
    travel_icon: string,
    travel_type: string,
    bucket_list: ?BucketList,
}

export type BucketList = {
    items: Array<{
        title: string,
        description: ?string,
    }>
}
