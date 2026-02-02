import { createContext, useState } from "react";

export const SearchContext = createContext();

export function SearchProvider({children}) {
    // variabile di stato per ciò che cerca l'utente
    const [searchFilm, setSearchFilm] = useState("")
    // variabile di stato per i risultati che ottengo dall'API
    const [resultsFilm, setResultsFilm] = useState([])

    const value = {
        searchFilm,
        setSearchFilm,
        resultsFilm,
        setResultsFilm
    }

    return(
       <SearchContext.Provider value={value}>
            {children}
       </SearchContext.Provider>
    )
}