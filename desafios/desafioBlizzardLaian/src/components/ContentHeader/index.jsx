import React from 'react'
import Button from '../Button'
import './styles.css'

const ContentHeader = () => {
  return (
    <div className="blizzard--content-header">
      <h1 className="content-title">JOGOS EM DESTAQUE</h1>
      <div>
        <Button>PC</Button>
        <Button>CONSOLE</Button>
        <Button>DISPOSITIVOS MÓVEIS</Button>
      </div>
    </div>
  )
}

export default ContentHeader
