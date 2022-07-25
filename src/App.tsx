import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Post from './Post'

import shiba from './assets/shiba.gif'
import toDataURL from './helpers/toDataURL'

declare const window: {
  easterEgg: () => void
}

export default (): JSX.Element => {
  const [title, setTitle] = useState('')
  useEffect(() => {
    if (title) {
      document.title = title
    }
  }, [title])

  useEffect(() => {
    console.info(`Hi!
You made it to the console.
Run easterEgg() for a surprise.
`)

    window.easterEgg = () => {
      toDataURL(shiba, (res) => {
        const style = [
          `background-image: url("${res}")`,
          'background-size: cover',
          'color: white',
          'text-shadow: 0 0 4px #000',
          'font-weight: bold',
          'padding: 10px 20px',
          'line-height: 200px',
        ].join(';')

        console.info('%cthe climate is dying', style)

        console.info('https://www.climateemergencyfund.org/')
      })
    }
  }, [])

  return (
    <div>
      <Router>
        <Header title={title} />
        <Switch>
          <Route path="/:slug">
            <Post setTitle={setTitle} />
          </Route>
          <Route path="/">
            <Home setTitle={setTitle} />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  )
}
