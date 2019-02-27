import React from 'react'

export default function CountdownClock() {
  return (
    <div>
      <div className="wrap">
        <div className="countdown">
          <div className="bloc-time days" data-init-value="00">
            <span className="count-title">Days</span>

            <div className="figure days days-1">
              <span className="top">0</span>
              <span className="top-back">
                <span>0</span>
              </span>
              <span className="bottom">0</span>
              <span className="bottom-back">
                <span>0</span>
              </span>
            </div>

            <div className="figure days days-2">
              <span className="top">0</span>
              <span className="top-back">
                <span>0</span>
              </span>
              <span className="bottom">0</span>
              <span className="bottom-back">
                <span>0</span>
              </span>
            </div>
          </div>

          <div className="bloc-time hours" data-init-value="00">
            <span className="count-title">Hours</span>

            <div className="figure hours hours-1">
              <span className="top">0</span>
              <span className="top-back">
                <span>0</span>
              </span>
              <span className="bottom">0</span>
              <span className="bottom-back">
                <span>0</span>
              </span>
            </div>

            <div className="figure hours hours-2">
              <span className="top">0</span>
              <span className="top-back">
                <span>0</span>
              </span>
              <span className="bottom">0</span>
              <span className="bottom-back">
                <span>0</span>
              </span>
            </div>
          </div>

          <div className="bloc-time min" data-init-value="0">
            <span className="count-title">Minutes</span>

            <div className="figure min min-1">
              <span className="top">0</span>
              <span className="top-back">
                <span>0</span>
              </span>
              <span className="bottom">0</span>
              <span className="bottom-back">
                <span>0</span>
              </span>
            </div>

            <div className="figure min min-2">
              <span className="top">0</span>
              <span className="top-back">
                <span>0</span>
              </span>
              <span className="bottom">0</span>
              <span className="bottom-back">
                <span>0</span>
              </span>
            </div>
          </div>

          <div className="bloc-time sec" data-init-value="0">
            <span className="count-title">Seconds</span>

            <div className="figure sec sec-1">
              <span className="top">0</span>
              <span className="top-back">
                <span>0</span>
              </span>
              <span className="bottom">0</span>
              <span className="bottom-back">
                <span>0</span>
              </span>
            </div>

            <div className="figure sec sec-2">
              <span className="top">0</span>
              <span className="top-back">
                <span>0</span>
              </span>
              <span className="bottom">0</span>
              <span className="bottom-back">
                <span>0</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
