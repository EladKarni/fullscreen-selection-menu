import React from 'react'
import EventCard from '../EventCard/EventCard'
import './EventsCardList.css'

export default function EventsCardList(props) {
  return (
    <div id="EventCards">
      <div id="card-wrapper">
        <ul style={{ listStyle: 'none' }}>
          {props.cardList.map(card => (
            <li key={card.id}>
              <EventCard card={card} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
