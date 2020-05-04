import React from 'react'
import BagContext from '../utils/BagContext'
import Logo from './Logo'

function Header() {
  const [{ bagOpen }, dispatch ] = React.useContext(BagContext)

  const handleOpenBag = () => {
    dispatch({ type: 'TOGGLE_BAG' })
  }

  return (
    <header className="header">
      <Logo size={30} />
      <h1>Find a Critter</h1>
      <div onClick={handleOpenBag}>{bagOpen ? 'Back' : 'Bag' }</div>
    </header>
  )
}

export default Header
