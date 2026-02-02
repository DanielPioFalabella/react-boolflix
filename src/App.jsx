import { BrowserRouter, Routes, Route, } from "react-router-dom";
import DefaultLayout from "./layout/DefaulLayout";
import Main from "./components/Main";

const App = () => {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Main />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App