import React, {Component} from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


import faqData from './faqsData'

export default class FAQ extends Component {
  /**
   * faq object shape
   * {
   *  question: '',
   *  questionText: '',
   * }
   */
  state = {
    faqs: faqData,
    question:'',
    text: ''
  }

  componentDidMount() {
    // set initally selected FAQ
    this.changeFAQ(0);
  }

  changeFAQ = index => {
    const { faqs } = this.state;

    // grab question and text - see faq object shape comment above.
    const { question, questionText } = faqs[index];
    this.setState({ question, questionText })
  };

  render() {
    const { faqs, question, questionText } = this.state;
    return (
      <section id="faq" className="jumptarget" >
        <div className="w-1200p margin-center container-fluid faq" >
        {/* 200px dead space between the two components  */}

        {/* left side : faq list */}
          <div className="w-400p margin-center container-fluid faq-questions" >
            {
              faqs.map( (faq, i) =>
                <p className="faq-link"
                  onClick={ () => this.changeFAQ(i)}
                >
                  {faq.question}
                </p>
              )
            }
          </div>
        {/*  right side: faq content */}
          <div className="w-600p margin-center container-fluid faq-content">
            <h1 className="faq-header">FAQ</h1>
            <p className="font-weight-bold primary m-b-6 faq-question"> {question} </p>
            {ReactHtmlParser(questionText)}
          </div>
        </div>
      </section>
    )
  }
}
