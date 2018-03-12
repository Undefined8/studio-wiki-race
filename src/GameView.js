import React, { Component } from 'react';
import WikiApi from './WikiApi.js';
import WikiSummary from './WikiSummary.js';
import WikiLink from './WikiLink.js';

export default class GameView extends Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      links: []
    }
  }
  
  componentDidMount(){
    var self = this;
    
    WikiApi.getLinks(self.props.title).then((data) => {
      self.setState({ links: data });
    });
    
    
  }

  render() {
    var renderedLinks = this.state.links.map((data) => {
      return (<WikiLink title={data} key={data}/>);
    });
    
    
    return (
      <div>
        <WikiSummary title={this.props.title}/>
        {renderedLinks}
      </div>
    );
  }
}
