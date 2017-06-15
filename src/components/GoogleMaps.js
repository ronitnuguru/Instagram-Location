import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

const GoogleMaps = (props) => {
  if (props.locationData === undefined) {
    return <div />;
  }
  
  props.locationData.map(x => {renderList(x.location)});

  return (
    <div>

    </div>
  );
};

export default GoogleMaps;
