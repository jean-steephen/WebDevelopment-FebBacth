import React from "react";
import { BrowserRouter , Routes , Route, Link} from 'react-router-dom';
import Home from "./Home";
import Cart from "./Cart";
import PageNotFound from "./PageNotFound";
import FirstPage from "./FirstPage";

function App() {
   

    return (
        <BrowserRouter>
        <nav>
          <Link to="/Home">Home </Link>    " "
          <Link to="/Cart">Cart</Link>    " "
        </nav>
        <Routes>
          <Route path="/" element={<FirstPage/>} />
        <Route path="/Home" element={ <Home/>} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="*" element={<PageNotFound/>} />
        </Routes>
   </BrowserRouter>
    )
}

export default App