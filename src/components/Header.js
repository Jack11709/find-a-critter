import React from 'react'
import useBag from '../utils/useBag'
import Logo from './Logo'

function Header() {
  const { bagOpen, handleOpenBag, bagContents } = useBag()

  return (
    <header className="header">
      <Logo size={30} />
      <h1>Find a Critter</h1>
      <div
        className="bag"
        onClick={handleOpenBag}>
        {bagOpen ? 'Back' : 'Bag' }
        <span className="bag-icon">{bagContents.length}</span>
      </div>
    </header>
  )
}

export default Header
