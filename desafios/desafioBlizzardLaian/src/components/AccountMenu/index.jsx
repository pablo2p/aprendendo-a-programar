import React from 'react'
import MenuItem from '../MenuItem'
import './styles.css'

const AccountMenu = () => {
  return (
    <div className="blizzard--account-menu">
      <MenuItem fontSize="16">Suporte</MenuItem>
      <MenuItem fontSize="16">Minha conta</MenuItem>
    </div>
  )
}

export default AccountMenu
