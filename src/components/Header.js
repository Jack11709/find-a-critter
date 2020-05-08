import React from 'react'
import useBag from '../utils/useBag'
import useMobile from '../utils/useMobile'
import Logo from './Logo'

function Header() {
  const { bagOpen, handleOpenBag, bagContents } = useBag()
  const isMobile = useMobile()

  return (
    <header className="header">
      <Logo size={30} />
      <h1>Find a Critter</h1>
      {isMobile && 
        <div
          className="bag"
          onClick={handleOpenBag}>
          <p className="bag-button">{ bagOpen ? 'Back' : 'Bag' }</p>
          {bagContents.length > 0 && <span className="bag-icon"><p>{bagContents.length}</p></span>}
        </div>
      }
    </header>
  )
}

export default Header
