import React, { Component } from 'react'

import Menu from '../Menu'
import Country from '../Country'
import Weapon from '../Weapon'

import { version } from '../../../package.json'
import data from '../../data/global'
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
      option: 'COUNTRY',
      type: 'COUNTRY'
    }
  }

  updateOption = (event) => {
    this.setState({
      option: event.currentTarget.value,
      type: event.currentTarget.dataset.type
    })
  }

  changeCountry = (event) => {
    this.setState({
      country: countries[event.currentTarget.value] || this.state.country,
      option: 'COUNTRY',
      type: 'COUNTRY'
    })
  }

  render() {
    const Viewport = matchViewport(this.state.type)
    return (
      <React.Fragment>
        <header className='app-header' style={{ backgroundColor: this.state.country.color }}>
          <h1 style={{ color: this.state.country.title }}>{this.state.country.name}</h1>
          <p style={{ color: this.state.country.title }} className='header-subtitle'>Year {data.year}</p>
        </header>
        <main className='app-container'>
          <Menu
            country={this.state.country}
            option={this.state.option}
            type={this.state.type}
            updateValue={this.updateOption}
            changeCountry={this.changeCountry}
          />
          <Viewport
            className='item-viewport'
            option={this.state.option}
            country={this.state.country}
          />
        </main>
        <footer className='app-footer'>
          <p>App v{version}</p>
          <p>
            Want to make Vectorial weapons ? Try <a href='https://vectr.com/' target='_blank'>Vectr</a> !
          </p>
        </footer>
      </React.Fragment>
    )
  }
}

export default App
