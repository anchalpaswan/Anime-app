import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import AnimeList from './AnimeList'
import AnimeInfo from './AnimeInfo'
function App() {
  const [animeData, setAnimeData] = useState()
  const [animeInfo, setAnimeInfo] = useState()
  const [search, setSearch] = useState('Naruto')
  useEffect(() => {
    axios
      .get(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`)
      .then((response) => {
        setAnimeData(response.data)
      })
  }, [search])

  return (
    <>
      <header>
        <h1>Anime List</h1>
        <input
          type="text"
          value={search}
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>
      <div className="container">
        <div className="animeInfo">
          {animeInfo && <AnimeInfo animeInfo={animeInfo} />}
        </div>
        <AnimeList animeList={animeData} setAnimeInfo={setAnimeInfo} />

      </div>
    </>
  )
}

export default App
