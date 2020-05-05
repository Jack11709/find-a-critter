import React from 'react'
import critters from '../data/data.json'
import CritterContext from './CritterContext'

function useCritters() {  
  const [searchTerm, setSearchTerm] = React.useContext(CritterContext)

  const filterArr = (arr, term) => {
    const re = new RegExp(term, 'i')
    return arr.filter(c => re.test(c.name))
  }

  const handleChange = ({ target: { value } }) => {
    setSearchTerm(value)
  }

  return {
    critters: filterArr(critters, searchTerm),
    setSearchTerm: handleChange,
    searchTerm
  }
}

export default useCritters
