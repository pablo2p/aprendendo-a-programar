import React from 'react'
import './styles.css'
import Menu from '../../components/Menubar'
import AccountMenu from '../../components/AccountMenu'

const Header = () => {
  return (
    <nav className="blizzard--navbar">
      <div className="container blizzard--container">
        <Menu />
        <AccountMenu />
      </div>
    </nav>
  )
}

export default Header
