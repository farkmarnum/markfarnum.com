import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Post from './Post'

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
