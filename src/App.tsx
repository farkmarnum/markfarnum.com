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
            Hi! I'm Mark. I'm a software engineer.
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
            <div className="description">
              Ever been stuck on the subway, wondering if you should transfer at
              the next station, but don't have service underground?
              <br />
              Solution: a web app that gives users access to all the realtime
              data of a transit system, as up to date as the last time they
              opened the web app and had a connection.
              <div className="mt-1">
                View on{' '}
                <a
                  href="https://github.com/farkmarnum/transit_data_access"
                  target="_blank"
                  rel="noreferrer follow"
                >
                  GitHub
                </a>
                .
              </div>
            </div>

            <div className="mt-3">
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
            <div className="description">
              Add emojis to your text! Algorithm trained on r/emojipasta
              subreddit posts.
              <div className="mt-1">
                View on{' '}
                <a
                  href="https://github.com/farkmarnum/emojify"
                  target="_blank"
                  rel="noreferrer follow"
                >
                  GitHub
                </a>
                .
              </div>
            </div>

            <div className="mt-3">
              <h5 style={{ display: 'inline' }}>
                <a
                  href="https://github.com/farkmarnum/setup-domain-aws"
                  target="_blank"
                  rel="noreferrer follow"
                >
                  setup-domain-aws
                </a>
              </h5>
            </div>
            <div className="description">
              Automate the tedious process of domain registration (AWS Route53),
              certificate setup (AWS ACM), and config setup (GitHub Secrets /
              AWS Secrets Manager).
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
              - <em>former Senior Engineer</em>
            </div>
            <div className="description">
              ViaHero is an online marketplace for travelers to choose locals to
              plan their personalized trip. It's a brand new way to travel,
              perfect for those who want to travel independently and see a place
              through a local's eyes.
            </div>

            <div className="mt-3">
              <h5 style={{ display: 'inline' }}>
                <a
                  href="https://gospot.io"
                  target="_blank"
                  rel="noreferrer follow"
                >
                  GoSpot
                </a>
              </h5>{' '}
              - <em>current Engineer</em>
            </div>
            <div className="description">
              GoSpot is a community-driven marketplace where property managers
              can list their outdoor spots, and guests can conveniently find and
              rent safe outdoor locations for gatherings and events.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
