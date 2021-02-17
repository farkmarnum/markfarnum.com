/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import './DispoCoverLetter.css'
import titles from './helpers/titles'

const DispoCoverLetter = (): JSX.Element => (
  <div className="main container">
    <h1 className="text-center title">
      <code>
        <ReactTypingEffect
          text={titles('hi dispo!')}
          speed={80}
          eraseSpeed={60}
          eraseDelay={3000}
          typingDelay={250}
        />
      </code>
    </h1>
    <div className="row content cover-letter">
      <div>
        <h4>Hi 👋</h4>
        I’m a software engineer who thrives in{' '}
        <strong>small, driven teams</strong> working on ideas that{' '}
        <strong>matter</strong>.
      </div>

      <div>
        <h4>What will I bring to Dispo?</h4>
        <ol>
          <li>A proven track-record as a hardworking fast learner.</li>
          <li>
            A <strong>passion</strong> for setting up secure, highly-available
            backend infrastructures.{' '}
            <ul>
              <li>
                This sounds like some resumé bullshit but it's not... I honestly
                love this stuff!
              </li>
            </ul>
          </li>
          <li>
            A love of Infrastructure as Code.
            <ul>
              <li>Clicking though AWS Console → 🤮</li>
              <li>
                Writing IaC that can be reused, adapted, and documented → 😍😍😍
              </li>
            </ul>
          </li>
          <li>
            Experience communicating well with technical and non-technical
            stakeholders.
          </li>
          <li>Extensive experience with Python, Node, and AWS.</li>
          <li>
            A need to do things the right way even while working quickly. This
            means:
            <ul>
              <li>Writing well-written, maintainable code.</li>
              <li>Code reviews!</li>
              <li>Security is always a priority.</li>
            </ul>
          </li>
        </ol>
      </div>

      <div>
        <h4>Why do I want to work for Dispo?</h4>
        <ul>
          <li>
            I love the idea. Taking a photo and sharing it should be about
            capturing memories and connecting with people, not getting sucked
            into your phone (🙋‍♂️ guilty).{' '}
          </li>
          <li>
            I thrive on responsibility and challenge. I value the opportunity to
            manage an infrastructure that will support millions of DAUs.
          </li>
          <li>
            The people are the <strong>most important part</strong> of any job.
            I can tell you've put together a great team, and I want to be a part
            of it.
          </li>
        </ul>
      </div>

      <div>
        <h4>Want to see some of my work?</h4>
        Click my face in the top-left to see more! 🙂
      </div>
    </div>
  </div>
)

export default DispoCoverLetter
