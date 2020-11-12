import React, { Component } from 'react';
import {Collapse} from "reactstrap";
import ReactHtmlParser from "react-html-parser";

export default class FAQMobileItem extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.close = this.close.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  close() {
    this.setState({
      isOpen: false
    })
  }

  render() {
    return(
      <div>
        <div className="w-max-600p margin-center container-fluid faq-content p-b-6" onClick={this.toggle}>
          <p className="font-weight-bold primary m-b-8" onClick={this.toggle}> {this.props.faq.question} </p>
          <Collapse isOpen={this.state.isOpen}>
            {ReactHtmlParser(this.props.faq.questionText)}
          </Collapse>
        </div>
      </div>
    )
  }

}
