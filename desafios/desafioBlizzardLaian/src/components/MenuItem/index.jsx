/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './styles.css'

const MenuItem = (props) => {
  return (
    <a
      href="#"
      className="blizzard--menu-item"
      style={{ fontSize: `${props.fontSize}px` }}
    >
      {props.children}
    </a>
  )
}

export default MenuItem
