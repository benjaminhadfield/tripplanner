import React, {Component} from 'react';

import styles from './styles/itinerary.scss';


export default class Itinerary extends Component {
    render() {
        const { locations } = this.props;

        var itineraryItems = locations.map((item, i) => {
            return (<ItineraryItem key={i}
                                   location={item.title}
                                   arriveTime={item.arrive}
                                   departTime={item.depart}
                                   travelType={item.travel_type}
                                   travelIcon={item.travel_icon}
                                   destinationLocation="Destination"
                                   travelDuration="8 Hours"/>);  // #
        });

        return (
            <div className={styles.itinerary}>
                {itineraryItems}
            </div>
        );
    }
}


class ItineraryItem extends Component {
    render() {
        const { location, arriveTime, departTime,
            travelType, travelIcon, destinationLocation, travelDuration } = this.props;
        return (
            <div>
                <div className={styles.itineraryitem}>
                    {arriveTime ? <p>Arrive in <strong>{location}</strong> on <strong>{arriveTime}</strong>.</p> : null}
                    {departTime ? <p>Depart <strong>{location}</strong> on <strong>{departTime}</strong>.</p> : null}
                </div>

                {departTime ?
                <ItineraryTravel travelType={travelType}
                                 travelIcon={travelIcon}
                                 originLocation={location}
                                 destinationLocation={destinationLocation}
                                 travelDuration={travelDuration}/> : null}
            </div>
        );
    }
}


class ItineraryTravel extends Component {
    render() {
        const { travelType, travelIcon, originLocation, destinationLocation, travelDuration } = this.props;
        return (
            <div className={styles.travel}>
                <div className={styles.travel__line}></div>

                <div className={styles.travel__detail}>
                    <p className={styles.travel__detail__item}>
                        <i className={`fa ${travelIcon} ${styles.icon}`} aria-hidden="true"></i>
                        {travelType} from <strong>{originLocation}</strong> to <strong>{destinationLocation}</strong>
                    </p>
                    {travelDuration ? <p className={styles.travel__detail__time}>{travelDuration}</p> : null}
                </div>
            </div>
        );
    }
}
