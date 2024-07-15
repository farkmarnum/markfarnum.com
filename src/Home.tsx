import {
  type ReactNode,
  type Dispatch,
  type SetStateAction,
  useEffect,
} from 'react'
import ReactTypingEffect from 'react-typing-effect'
import './Home.css'
import titles from './helpers/titles'
import { newTabLink } from './helpers/react'

const Item = ({
  title,
  target,
  subtitle,
  children,
  noMargin = false,
}: {
  title: string
  target?: string
  subtitle?: string
  noMargin?: boolean
  children: ReactNode
}) => (
  <>
    <div className={noMargin ? '' : 'mt-3'}>
      <h5 style={{ display: 'inline' }}>
        {target ? (
          <a href={target} {...newTabLink}>
            {title}
          </a>
        ) : (
          <span style={{ color: 'var(--blue)' }}>{title}</span>
        )}
      </h5>
      {subtitle && <em> - {subtitle}</em>}
    </div>
    <div className="description">{children}</div>
  </>
)

const Work = () => (
  <div>
    <h4>work</h4>

    <Item
      title="Propagate"
      target="https://www.propagateag.com/"
      subtitle="Software Engineering Manager"
      noMargin
    >
      Propagate is a software, development, and financing ecosystem that makes
      it easy for farms to transition to regenerative agriculture through
      agroforestry.
    </Item>

    <Item
      title="Hashboard"
      target="https://hashboard.com"
      subtitle="Software Engineer"
    >
      Hashboard is a lightweight data analysis and visualization tool that
      connects directly to your data warehouse.
    </Item>

    <Item
      title="Nayya"
      target="https://nayya.com"
      subtitle="Senior Software Engineer, Software Engineering Manager"
    >
      Giving Americans peace on their best days, and confidence on their worst.
      Our purpose is to help every American, regardless of race, gender, sexual
      orientation, or socio-economic standing, to achieve the health and
      financial potential that they deserve.
    </Item>

    <Item title="ViaHero" subtitle="Senior Software Engineer">
      ViaHero is an online marketplace where travelers connect with local
      residents to plan their personalized trip. It's a brand new way to travel,
      perfect for those who want to travel independently and see a place through
      a local's eyes.
    </Item>

    <Item title="GoSpot" subtitle="Lead Engineer">
      GoSpot is a community-driven marketplace where property managers can list
      their outdoor spots, and guests can conveniently find and rent safe
      outdoor locations for gatherings and events.
    </Item>
  </div>
)

const Projects = () => (
  <div>
    <h4>projects</h4>

    <Item
      title="bad password rules"
      target="https://badpasswordrules.com"
      noMargin
    >
      Some websites have terrible password requirements. This website has the
      worst. It takes an adversarial approach — every time you manage to satisfy
      all the existing password rules, it adds a new one.
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
    </Item>

    <Item
      title="setup-domain-aws"
      target="https://github.com/farkmarnum/setup-domain-aws"
    >
      Automate the tedious process of domain registration (AWS Route53),
      certificate setup (AWS ACM), and config setup (GitHub Secrets / AWS
      Secrets Manager).
      <div className="mt-1">
        <code>npx setup-domain-aws help</code>
      </div>
    </Item>

    <Item title="emojify" target="https://emojify.net">
      Add emojis to your text! Algorithm trained on r/emojipasta subreddit
      posts.
      <div className="mt-1">
        View on{' '}
        <a href="https://github.com/farkmarnum/emojify" {...newTabLink}>
          GitHub
        </a>
        .
      </div>
    </Item>

    <Item title="thaas" target="https://thaas.io">
      Tom Hanks As A Service. API, Slack app, and GitHub App.{' '}
      <div className="mt-1">
        <code>!thaas</code>
      </div>
    </Item>

    <Item
      title="transit data access"
      target="https://github.com/farkmarnum/transit_data_access"
    >
      Ever been stuck on the subway, not sure if you should transfer at the next
      station, but don't have service underground? Access all the realtime data
      of a transit system with Transit Data Access (packed into tiny Protobuf
      updates), as up to date as the last time you opened the web app and had a
      connection.
    </Item>

    <Item title="this website">
      Check it out on{' '}
      <a href="https://github.com/farkmarnum/markfarnum.com" {...newTabLink}>
        GitHub
      </a>
      !
    </Item>
  </div>
)

const Skills = () => (
  <div>
    <h4>skills</h4>
    <div className="skills">
      <div>
        <ul>
          <li>Javascript</li>
          <ul>
            <li>Typescript</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>React</li>
          </ul>
        </ul>
      </div>
      <div>
        <ul>
          <li>Python</li>
          <ul>
            <li>Flask</li>
            <li>Django</li>
            <li>asyncio</li>
            <li>pandas</li>
          </ul>
        </ul>
      </div>
      <div>
        <ul>
          <li>Other languages</li>
          <ul>
            <li>Ruby on Rails</li>
            <li>Bash/Shell</li>
            <li>Rust</li>
            <li>SQL</li>
          </ul>
        </ul>
      </div>
      <div>
        <ul>
          <li>CD/CI, IaC</li>
          <ul>
            <li>Terraform</li>
            <li>Pulumi</li>
            <li>GitHub Actions</li>
            <li>Serverless</li>
            <li>CloudFormation</li>
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
            <li>Postgres</li>
            <li>SQLite</li>
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
)

const Home = ({
  setTitle,
}: {
  setTitle: Dispatch<SetStateAction<string>>
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
          Hi! I'm Mark. I'm a software engineer. I love working in small, driven
          teams on ideas that matter.
        </div>

        <div>
          <h4>specialties</h4>
          <div className="specialties">
            <div>startups</div>
            <div>backend</div>
            <div>frontend</div>
            <div>AWS</div>
            <div>nodejs</div>
            <div>react</div>
            <div>typescript</div>
            <div>python</div>
            <div>terraform</div>
          </div>
        </div>

        <Work />
        <Projects />
        <Skills />
      </div>
    </div>
  )
}

export default Home
