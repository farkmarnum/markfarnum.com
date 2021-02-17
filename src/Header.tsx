/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { newTabLink } from './helpers/react'
import headshot from './headshot-cropped.jpg'
import Linkedin from './logo-linkedin'
import Github from './logo-github'
import Mail from './mail-outline'
import './Header.css'

export default (): JSX.Element => (
  <div className="header">
    <a href="/" className="headshotlink">
      <img src={headshot} alt="" className="headshot" />
    </a>
    <div className="headertite">
      <code>mark farnum</code>
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
