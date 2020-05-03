import React from 'react'

function Search({ handleChange, searchTerm }) {
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
