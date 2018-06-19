import React, { Component } from 'react'

class PokemonUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {}
    }

    this.fetchUserData()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.pokeName !== this.props.match.params.pokeName) {
      this.fetchUserData()
    }
  }

  fetchUserData = () => {
    const { params } = this.props.match
    fetch(`http://pokeapi.salestock.net/api/v2/pokemon/${params.pokeName}`)
      .then(response => response.json())
      .then(user => this.setState({ user }))
  }

  render() {
    const { user } = this.state

    return (
      <div className="GithubUser">
        <img src={user.front_default} alt="" />
        
        <h3>
          <a href={user.html_url} target="_blank">
          Name: {user.name} 
          </a>
        </h3>

        <h3>Weight: {user.weight} lbs</h3>
        <h3>Pokedex no.: {user.id} </h3>
      </div>
    )
  }
}

export default PokemonUser