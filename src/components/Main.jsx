import { SearchContext } from "../context/SearchContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

const Main = () => {
    const { resultsFilm } = useContext(SearchContext)

    return (
        <>
            <main>
                
                <div className="card-film-container">
                    {resultsFilm.map((film) => (
                        <Link to={`/movie/${film.id}`} key={film.id}>
                        <div className="card-film">
                            <h3>{film.title}</h3>
                            <img src={`https://image.tmdb.org/t/p/w342/${film.poster_path}`} alt={film.title} />
                        </div>
                        </Link>
                    ))}
                </div>
                
            </main>
        </>
    )
}

export default Main