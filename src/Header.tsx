/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { useHistory } from 'react-router-dom'
import { newTabLink } from './helpers/react'
import headshot from './assets/headshot-cropped.jpg'
import LinkedinIcon from './assets/logo-linkedin.svg'
import GithubIcon from './assets/logo-github.svg'
import MailIcon from './assets/mail-outline.svg'
import './Header.css'

const Linkedin = () => <img src={LinkedinIcon} alt="Linkedin" />
const Github = () => <img src={GithubIcon} alt="Github" />
const Mail = () => <img src={MailIcon} alt="Mail" />

export default ({ title }: { title: string }): JSX.Element => {
  const history = useHistory()

  const goHome = () => {
    if (history.location.pathname !== '/') {
      history.push('/')
    }
  }

  return (
    <div className="header">
      <button
        type="button"
        onClick={goHome}
        className="button-no-style headshotlink"
      >
        <img src={headshot} alt="Mark Farnum Homepage" className="headshot" />
      </button>
      <div className="headertitle">
        <h1 className="reset">
          <code>{title}</code>
        </h1>
      </div>
      <div className="social-links">
        <a
          href="mailto:mark.farnum@gmail.com?subject=hi!"
          {...newTabLink}
          className="link-no-style mail"
        >
          <Mail />
        </a>
        <a
          href="https://www.linkedin.com/in/mark-farnum/"
          {...newTabLink}
          className="link-no-style linkedin"
        >
          <Linkedin />
        </a>
        <a
          href="https://github.com/farkmarnum"
          {...newTabLink}
          className="link-no-style github"
        >
          <Github />
        </a>
      </div>
    </div>
  )
}
