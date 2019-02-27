import Axios from 'axios'
import moment from 'moment'

const Root = 'https://www.googleapis.com/calendar/v3/calendars/'
const calendarID = '162osjakh2mr7594d7fsk37lat3juf60@import.calendar.google.com'
const APIKey = 'AIzaSyDXGT6tr7HSR37T2TQ-KZFYeWDGRUzAfds'
const currentDate = moment().toISOString()

let maxResults = 3

const getEvents = event => {
  try {
    return Axios.get(
      Root +
        calendarID +
        '/events?maxResults=' +
        maxResults +
        '&timeMin=' +
        currentDate +
        '&singleEvents=true' +
        '&orderBy=startTime' +
        queryProp(event) +
        '&key=' +
        APIKey
    )
  } catch (error) {
    console.error(error)
  }
}

const queryProp = eventName => {
  if (eventName) {
    return `&q=${eventName}`
  } else {
    return ''
  }
}

export default function DataRequest(title) {
  return getEvents(title).then(events => {
    excludePastEvents(events.data.items)
    return events.data.items
  })
}

function excludePastEvents(events) {
  if (moment(events[0].start.dateTime).diff(moment(), 'minutes') < 0) {
    return events.shift()
  } else {
    return events.pop()
  }
}
