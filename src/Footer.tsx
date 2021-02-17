/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import './Footer.css'

export default (): JSX.Element => (
  <div className="footer">
    &copy; Copyright Mark Farnum {new Date().getFullYear()}
  </div>
)
