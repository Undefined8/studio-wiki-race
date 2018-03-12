import React, { Component } from 'react';
import WikiApi from './WikiApi.js';

export default class WikiLink extends Component {

  render() {
    return (
      <div>{this.props.title}</div>
    );
  }
}
