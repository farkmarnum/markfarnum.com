import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Home from './Home'

import shiba from './assets/shiba.gif'
import toDataURL from './helpers/toDataURL'

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

        <Route path="/">
          <Home setTitle={setTitle} />
        </Route>
      </Router>
      <Footer />
    </div>
  )
}

declare global {
  interface Window {
    easterEgg: () => void
  }
}
