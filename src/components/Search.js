import React from 'react'
import CritterContext from '../utils/CritterContext'

function Search() {
  const [searchTerm, setSearchTerm] = React.useContext(CritterContext)

  const handleChange = ({ target: { value } }) => {
    setSearchTerm(value)
  }

  return (
    <div className="search-container">
      <input
        onChange={handleChange}
        value={searchTerm}
        placeholder="Search for a Critter"
      />
    </div>
  )
}

export default Search
