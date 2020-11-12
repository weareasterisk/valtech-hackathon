import React, {Component} from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { Collapse, Button } from 'reactstrap';

import faqData from './faqsData';

import FAQMobileItem from './faqMobileItem';

export default class FAQMobile extends Component {
  state = {
    faqs: faqData
  };

  render() {
    const { faqs } = this.state;
    return (
      <div className="margin-center container-fluid">
        <h1 className="faq-header">FAQ</h1>
        <p className="text-center font-weight-ligher speech">Click to Expand</p>
        {
          faqs.map( (faq, i) =>
          <FAQMobileItem
            faq={faq}
          />
          )
        }
      </div>
    );
  }
}
