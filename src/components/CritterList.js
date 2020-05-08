import React from 'react'
import useCritters from '../utils/useCritters'
import useMobile from '../utils/useMobile'
import Critter from './Critter'

function CritterList() {
  const { critters } = useCritters()
  const isMobile = useMobile()

  return (
    <div className="container">
      <div className="columns is-multiline">
        {critters.map(critter => ( 
          <Critter key={critter.name} {...critter} isMobile={isMobile} /> 
        ))}
      </div>
    </div>
  )
}

export default CritterList
