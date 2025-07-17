import { useState, useEffect } from 'react'

export default function App() {
  const [movies, setMovies] = useState([])
  const [searchText, setSearchText] = useState('')

  // useEffect(function () {
  //   fetchMovies()
  // }, [])

  async function fetchMovies() {
    const res = await fetch(
      `https://omdbapi.com?apikey=7035c60c&s=${searchText}`
    )
    const data = await res.json()
    setMovies(data.Search || [])
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={searchText}
          onChange={function (event) {
            event.target.value
            setSearchText(event.target.value)
          }}
          onKeyDown={function (event) {
            if (event.nativeEvent.isComposing) return
            if (event.key === 'Enter') {
              fetchMovies()
            }
          }}
        />
        <button onClick={fetchMovies}>검색</button>
      </div>
      <ul>
        {movies.map(function (movie) {
          return <li key={movie.imdbID}>{movie.Title}</li>
        })}
      </ul>
    </>
  )
}
