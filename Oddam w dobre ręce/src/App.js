import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Home from "./components/pages/Home";
//import Contact from "./components/pages/Contact";
//import About from "./components/pages/About";
import CustomMenu from "./components/common/CustomMenu";
import Container from '@mui/material/Container';
import Footer from "./components/common/Footer";

function App() {
  return (
    <BrowserRouter>
            <CustomMenu />
            <Routes>
                <Route exact path="/" element={<Home />}/>
                {/*<Route exact path="/kontakt" element={<Contact />}/>*/}
                {/*<Route exact path="/onas" element={<About />}/>*/}
            </Routes>
            <Footer />
    </BrowserRouter>
  );
}

export default App;