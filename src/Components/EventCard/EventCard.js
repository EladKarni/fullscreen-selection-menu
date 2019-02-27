import React from 'react'
import './EventCard.css'

export default function Card(props) {
  return (
    <div className="card">
      <div className="card--text">
        <div className="text--container">
          <div className="text--header">
            <h2 className="text--title"> {props.card.summary} </h2>
          </div>
          <div className="text--description">
            <p>
              <strong>Description: </strong>
              {props.card.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
