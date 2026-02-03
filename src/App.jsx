import { BrowserRouter, Routes, Route, } from "react-router-dom";
import DefaultLayout from "./layout/DefaulLayout";
import Main from "./components/Main";
import { SearchProvider } from "./context/SearchContext";
import SingleFilm from "./pages/SingleFilm";

const App = () => {
  return (
    <>
      <SearchProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<Main />} />
              <Route path="/movie/:id" element={<SingleFilm />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </>
  )
}

export default App