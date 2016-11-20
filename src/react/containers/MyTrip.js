import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getTrip } from '../actions/trip'

import Map from '../components/map/'
import Itinerary from '../components/itinerary/'
import TodoList from '../components/TodoList/'


class MyTrip extends Component {

    render() {
        const { loading, locations } = this.props;
        return (
            <div>
                <Map locations={locations.map(item => { return item.title })}/>
                <Itinerary locations={locations}/>
                <TodoList/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { locations, loading } = state.trip;
    return {
        locations,
        loading,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getTrip: (uuid) => dispatch(getTrip(uuid)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MyTrip);
