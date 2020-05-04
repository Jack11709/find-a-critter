import React from 'react'
import critters from '../data/data.json'
import CritterContext from '../utils/CritterContext'
import Critter from './Critter'

function CritterList() {
  const [ searchTerm ] = React.useContext(CritterContext)

  const filterArr = (arr, term) => {
    const re = new RegExp(term, 'i')
    return arr.filter(c => re.test(c.name))
  }

  return (
    <div className="container">
      <div className="columns is-multiline">
        {filterArr(critters, searchTerm).map(critter => ( 
          <Critter key={critter.name} {...critter} /> 
        ))}
      </div>
    </div>
  )
}

export default CritterList