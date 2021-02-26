/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { useHistory } from 'react-router-dom'
import { newTabLink } from './helpers/react'
import headshot from './headshot-cropped.jpg'
import Linkedin from './logo-linkedin'
import Github from './logo-github'
import Mail from './mail-outline'
import './Header.css'

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
