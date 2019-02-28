import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Data from '../../Util/DataRequests'
import CalculateTime from '../../Util/CalculateTime'
import EventsCardList from '../../Components/EventsCardList/EventsCardList'
import CountdownClock from '../../Components/CountdownClock/CountdownClock'
import moment from 'moment'

import './Countdown.css'

class Countdown extends Component {
  constructor() {
    super()

    this.state = {
      events: null
    }
  }

  componentDidMount() {
    Data(this.props.match.params.event).then(results => {
      this.setState({ events: results })
      CalculateTime(moment(results[0].start.dateTime).diff(moment(), 'seconds'))
    })
  }

  render() {
    return (
      <div className="clock-wrap">
        <h1>{this.props.match.params.event} Will Start In:</h1>
        <CountdownClock />
        {this.state.events !== null ? (
          <EventsCardList cardList={this.state.events} />
        ) : null}
      </div>
    )
  }
}
export default withRouter(Countdown)
