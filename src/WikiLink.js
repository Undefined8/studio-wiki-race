import React, { Component } from 'react';
import WikiApi from './WikiApi.js';

export default class WikiLink extends Component {

  clickHandler(title) {
    this.props.addTitle(title);
  }

  render() {
    return (
      <button onClick={() => {this.clickHandler(this.props.title)}}>
        {this.props.title}
      </button>
    );
  }
}
