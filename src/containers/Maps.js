import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

class Maps extends Component {
  constructor(props) {
    super(props);
  }

  getCoordinates(i, j) {
    this.locationArray = [{ lat: i, lng: j }, ...this.locationArray];
    //if (this.props.paginationDone === true) {
      return <Marker position={{ lat: i, lng: j }} />;
    //}
  }

  getOtherCoordinates() {
    return this.locationArray.map(x => {
      return <Marker position={{ lat: x.lat, lng: x.lng }} />;
    });
  }

  locationArray = [];

  renderLocation() {
    if (this.props.paginationDone === true) {
      return this.getOtherCoordinates();
    }
    return this.props.location
      .filter(x => x !== null)
      .map(x => this.getCoordinates(x.latitude, x.longitude));
  }

  render() {
    return (
      <div>
        <GoogleMapLoader
          containerElement={<div style={{ height: '500px', width: '800px' }} />}
          googleMapElement={
            <GoogleMap defaultZoom={4} defaultCenter={{ lat: 39.5067, lng: -100.142 }}>
            {this.renderLocation()}
            </GoogleMap>
          }
        />
      </div>
    );
  }
}

export default Maps;
