import React from 'react'

import Logo from './Logo'

function Header({ handleOpenBag, bagOpen }) {
  return (
    <header className="header">
      <Logo size={30} />
      <h1>Find a Critter</h1>
      <div onClick={handleOpenBag}>{bagOpen ? 'Back' : 'Bag' }</div>
    </header>
  )
}

export default Header
