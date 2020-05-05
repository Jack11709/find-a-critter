import React from 'react'
import useCritters from '../utils/useCritters'

function Search() {
  const { searchTerm, setSearchTerm } = useCritters()

  return (
    <div className="search-container">
      <input
        onChange={setSearchTerm}
        value={searchTerm}
        placeholder="Search for a Critter"
      />
    </div>
  )
}

export default Search
