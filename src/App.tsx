import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import './App.css'
import titles from './helpers/titles'
import headshot from './headshot-cropped.jpg'

function App() {
  return (
    <div>
      <div className="header">
        <img src={headshot} alt="" className="headshot" />
        <div className="headertite">
          <code>mark farnum</code>
        </div>
      </div>
      <div className="main container">
        <h1 className="text-center title">
          <code>
            <ReactTypingEffect
              text={titles}
              speed={80}
              eraseSpeed={60}
              eraseDelay={3000}
              typingDelay={250}
            />
          </code>
        </h1>
        <div className="row content">
          <div>
            <h4>about</h4>
            Hi!
            <br />
            I'm Mark.
            <br />
            I'm a software engineer.
            <br />I love working in small, driven teams on ideas that matter.
          </div>

          <div>
            <h4>projects</h4>

            <div>
              <h5 style={{ display: 'inline' }}>
                <a
                  href="https://wtfmta.info"
                  target="_blank"
                  rel="noreferrer follow"
                >
                  transit data access
                </a>
              </h5>
            </div>
            <div className="mt-1">
              Ever been stuck on the subway, wondering if you should transfer at
              the next station, but don't have service underground? With most
              nav apps, you're out of luck until you get service again.
              <div className="mt-1">
                Solution: a web app that gives users access to{' '}
                <strong>all</strong> the realtime data of a transit system, as
                up to date as the last time they opened the web app and had a
                connection.
              </div>
              <div className="mt-05">
                Stack: Python, Node, React, Redis, ECS/Fargate
              </div>
              Check out the source on{' '}
              <a
                href="https://github.com/farkmarnum/transit_data_access"
                target="_blank"
                rel="noreferrer follow"
              >
                GitHub
              </a>
            </div>

            <div className="mt-2">
              <h5 style={{ display: 'inline' }}>
                <a
                  href="https://emojify.net"
                  target="_blank"
                  rel="noreferrer follow"
                >
                  emojify
                </a>
              </h5>
            </div>
            <div className="mt-1">
              Ever been stuck on the subway, wondering if you should transfer at
              the next station, but don't have service underground? With most
              nav apps, you're out of luck until you get service again.
              <div className="mt-1">
                Solution: a web app that gives users access to{' '}
                <strong>all</strong> the realtime data of a transit system, as
                up to date as the last time they opened the web app and had a
                connection.
              </div>
              <div className="mt-05">
                Stack: Python, Node, React, Redis, ECS/Fargate
              </div>
            </div>
          </div>

          <div>
            <h4>work</h4>

            <div>
              <h5 style={{ display: 'inline' }}>
                <a
                  href="https://viahero.com"
                  target="_blank"
                  rel="noreferrer follow"
                >
                  ViaHero
                </a>
              </h5>{' '}
              - <em>(former Senior Engineer)</em>
            </div>
            <div className="mt-1">
              ViaHero is an online marketplace for travelers to choose locals to
              plan their personalized trip. It's a brand new way to travel,
              perfect for those who want to travel independently and see a place
              through a local's eyes.
              <div className="mt-05">
                Stack: Node, React, ECS/Fargate, MongoDB
              </div>
            </div>

            <div className="mt-2">
              <h5 style={{ display: 'inline' }}>
                <a
                  href="https://gospot.io"
                  target="_blank"
                  rel="noreferrer follow"
                >
                  GoSpot
                </a>
              </h5>{' '}
              - <em>(current Engineer)</em>
            </div>
            <div className="mt-05">
              GoSpot is a community-driven marketplace where property managers
              can list their outdoor spots, and guests can conveniently find and
              rent safe outdoor locations for gatherings and events.
              <div className="mt-1">Stack: Node, React, ECS/Fargate, RDS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
