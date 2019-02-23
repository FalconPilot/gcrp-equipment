import React, { Component } from 'react'

import Menu from '../Menu'
import Country from '../Country'
import Weapon from '../Weapon'

import countries from '../../data/countries'

import './style.css'

const matchViewport = (type) => ({
  COUNTRY: Country,
  WEAPON: Weapon
}[type] || <div className='item-viewport' />)

class App extends Component {
  constructor(props) {
    super(props)
    const country = Object.entries(countries)[0]
    this.state = {
      country: country[1],
      option: country[0],
      type: 'COUNTRY'
    }
  }

  updateOption = (event) => {
    this.setState({
      option: event.currentTarget.value,
      type: event.currentTarget.dataset.type
    }, () => console.log(this.state))
  }

  render() {
    const Viewport = matchViewport(this.state.type)
    return (
      <React.Fragment>
        <header className='app-header' style={{ backgroundColor: this.state.country.color }}>
          <h1>{this.state.country.name}</h1>
        </header>
        <main className='app-container'>
          <Menu
            country={this.state.country}
            option={this.state.option}
            type={this.state.type}
            updateValue={this.updateOption}
          />
          <Viewport
            className='item-viewport'
            option={this.state.option}
            country={this.state.country}
          />
        </main>
        <footer className='app-footer'>
        </footer>
      </React.Fragment>
    )
  }
}

export default App
