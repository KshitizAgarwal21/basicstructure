import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import Sidenav from "./Component/Sidenav/Sidenav";
import Content from "./Component/Content/Content";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Pages/Products";
import Blog from "./Pages/Blog";
import { useState } from "react";
function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <BrowserRouter>
        <Header toggle={toggle} setToggle={setToggle} />
        <div className="main-container">
          <div className="sidenav-container">
            {" "}
            <Sidenav toggle={toggle} />
          </div>
          <div className="content-container">
            <Routes>
              <Route path="/" element={<Content />}>
                <Route path="/products" element={<Products />}></Route>
                <Route path="/blog" element={<Blog />}></Route>
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
