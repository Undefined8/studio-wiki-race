import React, { Component } from 'react';
import WikiApi from './WikiApi.js'

export default class WikiStack extends Component {

  clickHandler(title) {
    this.props.setCurrentTitle(title);
  }

  render() {
    var buttons = this.props.titles.map((data) => {
      return (<button onClick={() => {this.clickHandler(data)}}>
          {data}
      </button>);
    });

    return (buttons);
  }
}
