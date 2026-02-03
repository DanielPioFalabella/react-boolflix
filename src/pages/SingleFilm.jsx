import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import { Link } from "react-router-dom";

const SingleFilm = () => {
    // gli passo l'id del film così sa dove leggere
    const { id } = useParams();
    // creo una variabile di stato per salvare il film
    const [film, setFilm] = useState(null);
    // endpoint
    const endpointSingleFilm = `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_FILM}`

    // faccio la chiamata con axios
    useEffect(() => {
        axios.get(endpointSingleFilm)
            .then(res => setFilm(res.data))
            .catch(err => console.log(err))
    }, [id])

    if (!film) {
        return <p>Caricamento...</p>
    }

    return (
        <>
            <main>
                <div className="card-single-film">
                    <h3>{film.title}</h3>
                    <img src={`https://image.tmdb.org/t/p/w342/${film.poster_path}`} alt={film.title} />
                    <p>{film.overview}</p>
                    <p>lingua originale: {film.original_language}</p>
                    <p>popoarità: {film.popularity}</p>
                    <Link to="/">
                        <button >Torna alla Ricerca</button>
                    </Link>
                </div>

            </main>
        </>
    )
}

export default SingleFilm