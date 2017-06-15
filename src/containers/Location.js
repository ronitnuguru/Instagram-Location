import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Maps from './Maps';
import { getInitialInstagramLocationData, getFurtherInstagramLocationData } from '../actions';


class Location extends Component {
  constructor(props) {
    super(props);

    this.renderLocation = this.renderLocation.bind(this);
    this.checkIfPaginationIsUndefined = this.checkIfPaginationIsUndefined.bind(this);
  }


  componentWillMount() {
    this.props.getInitialInstagramLocationData();
  }
  paginationDone = false;

  checkIfPaginationIsUndefined() {
    if (this.props.instagramUserMedia.data !== undefined) {
      if (this.props.instagramUserMedia.data.pagination.next_url !== undefined) {
        this.props.getFurtherInstagramLocationData(this.props.instagramUserMedia.data.pagination.next_url);
      } else {
        this.paginationDone = true;
      }
    }
  }

  renderLocation() {
      if (this.props.instagramUserMedia.data) {
        //console.log(this.paginationDone);
        return <Maps paginationDone={this.paginationDone} location={this.props.instagramUserMedia.data.data.map(mediaData => mediaData.location)} />;
      }
      return;
  }

  render() {
    return (
      <div>
        {this.checkIfPaginationIsUndefined()}
        {this.renderLocation()}
    </div>


    );
  }
}

function mapStateToProps({ instagramUserMedia }) {
  return {
    instagramUserMedia
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getInitialInstagramLocationData, getFurtherInstagramLocationData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Location);
