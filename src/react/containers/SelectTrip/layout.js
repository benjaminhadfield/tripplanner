import React, {Component} from 'react';

import EntryButtons from '../../components/dashboard/EntryButtons';

import { TRIP_LIST } from '../../constants/endpoints';


export default class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            trips: undefined,
        }
    }

    getTripDetails() {
        fetch(TRIP_LIST)
            .then(response => {
                return response.json();
            })
            .then(json => this.setState({
                trips: json,
            }));
    }

    componentWillMount() {
        this.getTripDetails();
    }

    render() {
        var { trips } = this.state;

        var trips_array = trips ? trips.map(trip => {
            return trip;
        }) : [];

        return (
            <div>
                <EntryButtons trips={trips_array}/>
            </div>
        );
    }
}
