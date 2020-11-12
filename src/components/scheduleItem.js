import React, {Component} from 'react';
import Table from "reactstrap/es/Table";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";

export default class ScheduleItem extends Component {
  constructor(props) {
    super(props);
    this.setState({ event: props.event })
  }

  state = {
    event: this.props.event
  };

  render() {
    const { event } = this.state;
    return (
      <Row className="p-b-8">
        <Col xs={6} className="primary text-right font-weight-medium line-height-min">{event.event}</Col>
        <Col xs={6} className="text-white font-weight-normal line-height-min"><u>{event.time}</u></Col>
      </Row>
    )
  }
}
