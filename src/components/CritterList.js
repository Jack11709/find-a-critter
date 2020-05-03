import React from 'react'

import Critter from './Critter'

function CritterList({ critters }) {
  return (
    <div className="container">
      <div className="columns is-multiline">
        {critters.map(critter => ( <Critter key={critter.name} {...critter} /> ))}
      </div>
    </div>
  )
}

export default CritterList