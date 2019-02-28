import React, { Component } from 'react'

import LoadingSpinner from '../LoadingSpinner'
import Header from '../Header'
import Menu from '../Menu'
import Country from '../Country'
import Weapon from '../Weapon'

import { newAuth, checkSession, parseHash } from '../../utils/auth'

import { version } from '../../../package.json'
import countries from '../../data/countries'

import './style.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = this.loadState()
  }

  componentWillMount() {
    this.auth = newAuth()

    parseHash(this.auth)
      .then(res => res
        ? Promise.resolve(res)
        : Promise.reject(res)
      )
      .catch(() => checkSession(this.auth))
      .then(res => {
        console.log(res)
        this.setState({
          credentials: res
        })
      })
      .catch(console.warn)
      .then(() => {
        this.setState({ loading: false })
      })
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
      type: (optionExist && type) || 'COUNTRY',
      loading: true
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

  logout = () => {
    this.auth.logout({ returnTo: (window.location.origin + window.location.pathname).replace(/\/$/g, '') })
  }

  login = () => {
    this.auth.authorize()
  }

  render() {
    const Viewport = this.matchViewport(this.state.type)
    return this.state.loading
      ? <LoadingSpinner />
      : (
        <React.Fragment>
          <Header
            credentials={this.state.credentials}
            country={this.state.country}
            login={this.login}
            logout={this.logout}
          />
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
