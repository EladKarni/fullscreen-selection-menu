import React, { Component } from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import './hero.css'

export default class Hero extends Component {
  state = {
    selection: ''
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    console.log(this.state.selection)
    return (
      <div className="Hero">
        <FormControl>
          <div className="hero-text-question">
            <h1>I want to watch</h1>
          </div>
          <Select
            value={this.state.selection}
            onChange={this.handleChange}
            className="selector"
            inputProps={{
              name: 'selection',
              id: 'tournament-selection'
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'GSL'}>Global Starcraft 2 League</MenuItem>
            <MenuItem value={'WCS'}>World Championship Serise</MenuItem>
            <MenuItem value={'IEM'}>Intel Extreme Masters</MenuItem>
          </Select>
        </FormControl>
      </div>
    )
  }
}
