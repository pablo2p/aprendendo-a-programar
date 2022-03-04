import React from 'react'
import GameCard from '../GameCard'

const cards = [
  {
    "link": "https://diablo2.blizzard.com/pt-br/",
    "image": "https://images.blz-contentstack.com/v3/assets/blta8f9a8e092360c6c/blt71e1f3ec632b3fe3/61a5156d43af6d102dc88ace/d2.jpg?auto=webp"
  },
  {
    "link": "https://diablo2.blizzard.com/pt-br/",
    "image": "https://images.blz-contentstack.com/v3/assets/blta8f9a8e092360c6c/blt71e1f3ec632b3fe3/61a5156d43af6d102dc88ace/d2.jpg?auto=webp"
  },
]

const ContentCards = () => {

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4">
        {cards.map(card => (
          <GameCard
            link="https://diablo2.blizzard.com/pt-br/"
            image="https://images.blz-contentstack.com/v3/assets/blta8f9a8e092360c6c/blt71e1f3ec632b3fe3/61a5156d43af6d102dc88ace/d2.jpg?auto=webp"
            title="Diablo II: Resurrected"
            logo="https://images.blz-contentstack.com/v3/assets/blta8f9a8e092360c6c/bltf82c19e7714f988c/61a50ce53c4e21100a80f1f6/d2-logo.png?auto=webp"
            description="RPG DE AÇÃO"
            battle
            xbox
            playstation
            nintendo
          />
        ))}
      </div>
    </div>
  )
}

export default ContentCards
