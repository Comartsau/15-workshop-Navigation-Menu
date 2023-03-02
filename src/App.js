import Navigation from "./components/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Member from "./components/pages/Member";
import Product from "./components/pages/Product";
import Admin from "./components/pages/Admin";

import "./App.css"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/"  element={ <Home />} />
          <Route path="/member" element={ <Member />} />
          <Route path="/product" element={ <Product />} />
          <Route path="/admin"  element={ <Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
