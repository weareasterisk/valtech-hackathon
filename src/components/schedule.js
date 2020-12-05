import React, {Component} from 'react'

import ScheduleItem from './scheduleItem'

import scheduleData from './scheduleData'
import {Row, Col} from "reactstrap";
import Table from "reactstrap/es/Table";

export default class Schedule extends Component {
  state = {
    schedule: scheduleData
  };

  render() {
    const {schedule} = this.state;
    return (
      <div className="w-1200p container-fluid">
        <h1>Schedule</h1>
        <Row className="container-fluid">
          {schedule.map( (days) =>
            <Col xl={4} lg={6} md={6} sm={12} className="p-top-50 p-sides-0 container-fluid">
              <h3 className="text-center p-b-6">{days.title}</h3>
                {
                  days.events.map( (event) =>
                    <ScheduleItem
                      event={event}
                    />
                  )
                }
            </Col>
          )}
        </Row>
        <p><b>All times are in CST</b></p>
        {/* <p><b> <a className="primary" href="https://quakecon.bethesda.net/en/schedule/" target="_blank" rel="noopener noreferrer">+ See more on the QuakeCon at Home Schedule</a></b></p> */}
      </div>
    )
  }
}
