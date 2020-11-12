import React, { Component } from 'react'

export default class ExternalRedirect extends Component {
  constructor( props ){
    super();
    this.state = { ...props };
  }
  componentWillMount(){
    console.log(this.props);
    window.location = this.props.link;
  }
  render(){
    return (<section>Redirecting...</section>);
  }
}
