import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault()
    const searchValue = e.target.search.value
    if (!searchValue) return
    setSearchTerm(searchValue)
  }

  return (
    <section>
      <h1 className="title">unsplash search</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          className="form-input search-input"
          placeholder="cat"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  )
}

export default SearchForm
