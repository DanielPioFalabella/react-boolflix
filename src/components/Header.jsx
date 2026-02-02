import { useContext } from "react"
import axios from "axios"
import {SearchContext} from "../context/SearchContext"

const Header = () => {
    // definisco una variabile di stato per salvare quello che l'utente cerca
    const {searchFilm, setSearchFilm, setResultsFilm} = useContext(SearchContext)
    // endpoint
    const endpointFilm = import.meta.env.VITE_API_FILM;

    // definisco una funzione che mi vada a recuperare i valori all'interno dell'API
    const handleSearch = () => {
        axios.get(endpointFilm + searchFilm)
        .then(res => setResultsFilm(res.data.results))
        .catch(err => console.log(err))
    }

  return(
    <>
      <nav>
        <input type="text" 
        value={searchFilm}
        onChange={(e) => (setSearchFilm(e.target.value))}
        placeholder="cerca qualcosa"/>
        <button onClick={handleSearch}>Cerca</button>
      </nav>
    </>
  )
}

export default Header