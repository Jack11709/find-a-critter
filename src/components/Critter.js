import React from 'react'

function Critter({ name, price, image, monthsAvailable }) {
  const [isCollapsed, setIsCollapsed] = React.useState(true)

  const handleClick = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className="column is-fullwidth-mobile is-half-tablet is-one-third-desktop">
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
          <button>
            Add to Bag
          </button>
        </div>
        <div className="critter-card-footer">
          <p onClick={handleClick}>{isCollapsed ? 'See More' : 'Hide'}</p>
          <div className={`critter-card-footer-content ${isCollapsed ? 'hidden' : '' }`}>
            Months Available: {monthsAvailable}
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Critter