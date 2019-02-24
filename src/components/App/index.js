import React, { Component } from 'react'

import Menu from '../Menu'
import Country from '../Country'
import Weapon from '../Weapon'

import { version } from '../../../package.json'
import data from '../../data/global'
import countries from '../../data/countries'

import './style.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = this.loadState()
  }

  optionExist = (option, country_key) => {
    const weapons = Object.values(countries[country_key].weapons)
      .reduce((acc, group) => Object.assign(acc, group.elements), {})
    return (
      option && (
        option === 'COUNTRY' || weapons[option]
      )
    )
  }

  loadState = () => {
    const country_key = localStorage.getItem('country')
    const option = localStorage.getItem('option')
    const type = localStorage.getItem('type')


    const country = (
      countries[country_key] && [
        country_key,
        countries[country_key]
      ]
    ) || Object.entries(countries)[0]

    const optionExist = this.optionExist(option, country[0])

    return {
      country_key: country[0],
      country: country[1],
      option: (optionExist && option) || 'COUNTRY',
      type: (optionExist && type) || 'COUNTRY'
    }
  }

  saveState = () => {
    localStorage.setItem('country', this.state.country_key)
    localStorage.setItem('option', this.state.option)
    localStorage.setItem('type', this.state.type)
  }

  updateOption = (event) => {
    this.setState({
      option: event.currentTarget.value,
      type: event.currentTarget.dataset.type
    }, this.saveState)
  }

  changeCountry = (event) => {
    const country = Object.entries(countries).filter(([k, c]) => k === event.currentTarget.value)[0]
    this.setState({
      country_key: country[0] || this.state.country_key,
      country: country[1] || this.state.country,
      option: 'COUNTRY',
      type: 'COUNTRY'
    }, this.saveState)
  }

  matchViewport = (type) => ({
    COUNTRY: Country,
    WEAPON: Weapon
  }[type] || <div className='item-viewport' />)

  render() {
    const Viewport = this.matchViewport(this.state.type)
    return (
      <React.Fragment>
        <header className='app-header' style={{ backgroundColor: this.state.country.color }}>
          <h1 style={{ color: this.state.country.title }}>{this.state.country.name}</h1>
          <p style={{ color: this.state.country.title }} className='header-subtitle'>Year {data.year}</p>
        </header>
        <main className='app-container'>
          <Menu
            country={this.state.country}
            country_key={this.state.country_key}
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
