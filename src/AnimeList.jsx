export default function AnimeList({ animeList, setAnimeInfo }) {
  return (
    <>
      
        {animeList
          ? animeList.data.map((anime, index) => (
              <div className="card" key={index} onClick={()=>setAnimeInfo(anime)}>
                <img src={anime.images.jpg.image_url} />
                <div className="animeInfo">
                  <h4>{anime.title}</h4>
                </div>
              </div>
            ))
          : 'Not Found'}
      
    </>
  )
}
