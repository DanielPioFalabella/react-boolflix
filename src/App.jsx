import { BrowserRouter, Routes, Route, } from "react-router-dom";
import DefaultLayout from "./layout/DefaulLayout";
import Main from "./components/Main";
import { SearchProvider } from "./context/SearchContext";

const App = () => {
  return (
    <>
      <SearchProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<Main />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </>
  )
}

export default App