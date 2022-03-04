/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Logo from '../Logo'
import MenuItem from '../MenuItem'
import './styles.css'

const Menu = () => {
  return (
    <div className="blizzard--menu">
      <Logo />
      <MenuItem fontSize="20">JOGOS</MenuItem>
      <MenuItem fontSize="20">LOJA</MenuItem>
      <MenuItem fontSize="20">NOTÍCIAS</MenuItem>
      <MenuItem fontSize="20">ESPORTS</MenuItem>
    </div>
  )
}

export default Menu
