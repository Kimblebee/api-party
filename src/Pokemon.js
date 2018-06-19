import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './Pokemon.css'
import PokemonUser from './PokemonUser'

class Pokemon extends Component {
  state = {
    pokeName: '',
  }

  handleChange = (ev) => {
    this.setState({ pokeName: ev.target.value })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/pokemon/${this.state.pokeName}`)
  }

  render() {
    return (
      <div className="Github">
        <img
          src="http://i0.kym-cdn.com/photos/images/original/001/024/523/1c7.jpg"
          alt="Pokemon_Logo"
          className="logo"
        />

        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="number"
              min="1"
              max="811"
              value={this.state.pokeName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">
              Look up Pokemon
            </button>
          </div>
        </form>

        <Route path="/pokemon/:pokeName" component={PokemonUser} />
      </div>
    )
  }
}

export default Pokemon