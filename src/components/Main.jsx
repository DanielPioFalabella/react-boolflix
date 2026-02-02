import { SearchContext } from "../context/SearchContext"
import { useContext } from "react"

const Main = () => {
    const { resultsFilm } = useContext(SearchContext)

    return (
        <>
            <main>
                <div className="card-film-container">
                    {resultsFilm.map((film) => (
                        <div key={film.id} className="card-film">
                            <h3>{film.title}</h3>
                            <img src={`https://image.tmdb.org/t/p/w342/${film.poster_path}`} alt={film.title} />
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}

export default Main