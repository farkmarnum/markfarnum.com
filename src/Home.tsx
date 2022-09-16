/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react'
import ReactTypingEffect from 'react-typing-effect'
import './Home.css'
import titles from './helpers/titles'
import { newTabLink } from './helpers/react'

const Home = ({
  setTitle,
}: {
  setTitle: React.Dispatch<React.SetStateAction<string>>
}): JSX.Element => {
  useEffect(() => {
    setTitle('mark farnum')
  }, [])

  return (
    <div className="main container">
      <h1 className="text-center title">
        <code>
          <ReactTypingEffect
            text={titles('mark farnum')}
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
          <h4>specialties</h4>
          <div className="specialties">
            <div>startups</div>
            <div>backend</div>
            <div>frontend</div>
            <div>AWS</div>
            <div>node</div>
            <div>react</div>
            <div>typescript</div>
            <div>python</div>
            <div>ruby</div>
          </div>
        </div>

        <div>
          <h4>projects</h4>

          <div>
            <h5 style={{ display: 'inline' }}>
              <a href="https://emojify.net" {...newTabLink}>
                emojify
              </a>
            </h5>
          </div>
          <div className="description">
            Add emojis to your text! Algorithm trained on r/emojipasta subreddit
            posts.
            <div className="mt-1">
              View on{' '}
              <a href="https://github.com/farkmarnum/emojify" {...newTabLink}>
                GitHub
              </a>
              .
            </div>
          </div>

          <div className="mt-3">
            <h5 style={{ display: 'inline' }}>
              <a href="https://badpasswordrules.com" {...newTabLink}>
                bad password rules
              </a>
            </h5>
          </div>
          <div className="description">
            Some websites have terrible password requirements. This website has
            the worst. It takes an adversarial approach — every time you manage
            to satisfy all the existing password rules, it adds a new one.
            <div className="mt-1">
              View on{' '}
              <a
                href="https://github.com/farkmarnum/bad-password-rules"
                {...newTabLink}
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
                {...newTabLink}
              >
                setup-domain-aws
              </a>
            </h5>
          </div>
          <div className="description">
            Automate the tedious process of domain registration (AWS Route53),
            certificate setup (AWS ACM), and config setup (GitHub Secrets / AWS
            Secrets Manager).
          </div>
          <div className="mt-1">
            <code>npx setup-domain-aws help</code>
          </div>

          <div className="mt-3">
            <h5 style={{ display: 'inline', color: 'var(--blue)' }}>
              transit data access
            </h5>
          </div>
          <div className="description">
            Ever been stuck on the subway, not sure if you should transfer at
            the next station, but don't have service underground? Access all the
            realtime data of a transit system with Transit Data Access (packed
            into tiny Protobuf updates), as up to date as the last time you
            opened the web app and had a connection.
            <div className="mt-1">
              View on{' '}
              <a
                href="https://github.com/farkmarnum/transit_data_access"
                {...newTabLink}
              >
                GitHub
              </a>
              .
            </div>
          </div>

          <div className="mt-3">
            <h5 style={{ display: 'inline', color: 'var(--blue)' }}>
              this website
            </h5>
          </div>
          <div className="description">
            Check it out on{' '}
            <a
              href="https://github.com/farkmarnum/markfarnum.com"
              {...newTabLink}
            >
              GitHub
            </a>
            !
          </div>
        </div>

        <div>
          <h4>work</h4>

          <div>
            <h5 style={{ display: 'inline' }}>
              <a href="https://nayya.com" {...newTabLink}>
                Nayya
              </a>
            </h5>{' '}
            - <em>Senior Software Engineer, Software Engineering Manager</em>
          </div>
          <div className="description">
            Giving Americans peace on their best days, and confidence on their
            worst. Our purpose is to help every American, regardless of race,
            gender, sexual orientation, or socio-economic standing, to achieve
            the health and financial potential that they deserve.
          </div>

          <div className="mt-3">
            <h5 style={{ display: 'inline' }}>
              <a href="https://viahero.com" {...newTabLink}>
                ViaHero
              </a>
            </h5>{' '}
            - <em>former Senior Engineer</em>
          </div>
          <div className="description">
            ViaHero is an online marketplace where travelers connect with local
            residents to plan their personalized trip. It's a brand new way to
            travel, perfect for those who want to travel independently and see a
            place through a local's eyes.
          </div>

          <div className="mt-3">
            <h5 style={{ display: 'inline' }}>
              <a href="https://gospot.io" {...newTabLink}>
                GoSpot
              </a>
            </h5>{' '}
            - <em>former Lead Engineer</em>
          </div>
          <div className="description">
            GoSpot is a community-driven marketplace where property managers can
            list their outdoor spots, and guests can conveniently find and rent
            safe outdoor locations for gatherings and events.
          </div>
        </div>

        <div style={{ marginTop: '6rem' }}>
          <h4>skills</h4>
          <div className="skills">
            <div>
              <ul>
                <li>Python</li>
                <ul>
                  <li>Flask</li>
                  <li>Django</li>
                  <li>aiohttp</li>
                  <li>pandas</li>
                </ul>
              </ul>
            </div>
            <div>
              <ul>
                <li>Javascript</li>
                <ul>
                  <li>Typescript</li>
                  <li>Node</li>
                  <li>Express</li>
                  <li>React</li>
                </ul>
              </ul>
            </div>
            <div>
              <ul>
                <li>Other languages</li>
                <ul>
                  <li>Rust</li>
                  <li>Elixir</li>
                  <li>Perl</li>
                  <li>Scheme</li>
                </ul>
              </ul>
            </div>
            <div>
              <ul>
                <li>CD/CI, IaC</li>
                <ul>
                  <li>CloudFormation</li>
                  <li>Terraform</li>
                  <li>Serverless</li>
                  <li>GitHub Actions</li>
                </ul>
              </ul>
            </div>
            <div>
              <ul>
                <li>AWS</li>
                <ul>
                  <li>ECS / Fargate / ECR</li>
                  <li>Lambda, EC2</li>
                  <li>S3, CloudFront, ELB</li>
                  <li>Route53, ACM, IAM</li>
                </ul>
              </ul>
            </div>
            <div>
              <ul>
                <li>DB</li>
                <ul>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                  <li>Redis</li>
                </ul>
              </ul>
            </div>
            <div
              style={{
                gridColumnStart: 1,
                gridColumnEnd: 4,
                marginTop: '1rem',
              }}
            >
              <ul>
                <li>Soft Skills</li>
                <ul>
                  <li>
                    Communicate openly and effectively with technical and
                    non-technical colleagues
                  </li>
                  <li>Find creative solutions and compromises</li>
                  <li>Learn and adapt quickly</li>
                  <li>Work consistently and dependably</li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
