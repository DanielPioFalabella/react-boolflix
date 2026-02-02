import { useState } from "react"

const Header = () => {
    // definisco una variabile di stato per salvare quello che l'utente cerca
    const [searchFilm, setSearchFilm] = useState()

  return(
    <>
      <nav>
        <input type="text" 
        value={searchFilm}
        onChange={(e) => (setSearchFilm(e.target.value))}
        placeholder="cerca qualcosa"/>
        <button>Cerca</button>
      </nav>
    </>
  )
}

export default Header