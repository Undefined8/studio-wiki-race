import React, { Component } from 'react';
import WikiApi from './WikiApi.js';
import WikiSummary from './WikiSummary.js';
import WikiLink from './WikiLink.js';
import WikiStack from './WikiStack.js';

export default class GameView extends Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      links: [],
      title: this.props.title
    };
  }
  
  componentDidMount(){
    var self = this;
    
    WikiApi.getLinks(self.props.title).then((data) => {
      self.setState({ links: data });
    });
    
  }
  
  componentWillReceiveProps(nextProps){
    var self = this;
    
    WikiApi.getLinks(nextProps.title).then((data) => {
      self.setState({ links: data });
    });
    
    console.log(nextProps.title);
  }
    

  render() {
    var renderedLinks = this.state.links.map((data) => {
      return (<WikiLink title={data} addTitle={this.props.addTitle}  key={data}/>);
    });
    
    
    return (
      <div>
        <WikiStack title={this.props.title} titles={this.props.titles} setCurrentTitle={this.props.setCurrentTitle} />
        <WikiSummary title={this.props.title} />
        {renderedLinks}
      </div>
    );
  }
}
