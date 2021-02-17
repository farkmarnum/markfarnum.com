import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import DispoCoverLetter from './DispoCoverLetter'

declare const window: {
  easterEgg: () => void
}

export default (): JSX.Element => {
  useEffect(() => {
    console.info(`Hi!
You made it to the console.
Run easterEgg() for a surprise.
`)

    window.easterEgg = () => {
      const style = [
        'background-image: url("https://media.giphy.com/media/aFTt8wvDtqKCQ/giphy.gif")',
        'background-size: cover',
        'color: #fff',
        'font-weight: bold',
        'padding: 10px 20px',
        'line-height: 200px',
      ].join(';')
      console.info('%c    h i r e    m e    ', style)
    }
  }, [])

  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/dispo">
            <DispoCoverLetter />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  )
}
