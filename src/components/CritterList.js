import React from 'react'
import useCritters from '../utils/useCritters'
import Critter from './Critter'

function CritterList() {
  const { critters } = useCritters()

  return (
    <div className="container">
      <div className="columns is-multiline">
        {critters.map(critter => ( 
          <Critter key={critter.name} {...critter} /> 
        ))}
      </div>
    </div>
  )
}

export default CritterList
