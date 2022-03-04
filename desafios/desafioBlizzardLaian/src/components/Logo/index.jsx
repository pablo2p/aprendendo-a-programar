import React from 'react'
import logo from '../../assets/images/blizzard.png'
import './styles.css'

const Logo = () => {
  return (
    <a
      href="https://www.blizzard.com/pt-br/"
      className="logo"
      target="_blank"
      rel="noreferrer"
    >
      <img src={logo} alt="logo blizzard" className="blizzard--logo" />
    </a>
  )
}

export default Logo
