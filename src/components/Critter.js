import React from 'react'
import useBag from '../utils/useBag'

function Critter({ name, price, image, isMobile, ...rest }) {
  
  const [isCollapsed, setIsCollapsed] = React.useState(true)
  const { addToBag, isInBag, removeFromBag } = useBag()

  const handleClick = () => {
    setIsCollapsed(!isCollapsed)
  }

  const handleAdd = () => {
    addToBag({ name, price, quantity: 1  })
  }

  const handleRemove = () => {
    removeFromBag(name)
  }

  return (
    <div className="column is-12">
      <div className="critter-card">
        <div className="critter-card-header">
          <div className="critter-card-header-content">
            <h4>{name}</h4>
          </div>
          <div className="critter-card-image">
            <img src={image} alt={name} loading="lazy" height={96} width={96} />
          </div>
        </div>
        <div className="critter-card-content">
          <div>
            Price: ${price}
          </div>
          {isInBag(name) ? 
            <button className="remove" onClick={handleRemove}>
              Remove
            </button>
            :
            <button onClick={handleAdd}>
              Add to Bag
            </button>
          }
        </div>
        <div className="critter-card-footer">
          {isMobile && <p onClick={handleClick}>{isCollapsed ? 'See More' : 'Hide'}</p>}
          <div className={`critter-card-footer-content ${(isCollapsed && isMobile) ? 'hidden' : '' }`}>
            <p>Location: {rest.location}</p>
            <p>Months Available: {rest.monthsAvailable}</p>
            <p>Times Available: {rest.monthsAvailable}</p>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Critter