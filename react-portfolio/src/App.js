import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./containers/Home";
import About from "./containers/About";
import Stack from "./containers/Stack";
function App() {
    return (
        <main style={{ backgroundColor: "#dddfdf" }}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/stack" element={<Stack />} />
                    <Route path="/projects" />
                    <Route path="/contact" />
                </Routes>
            </BrowserRouter>
        </main>
    );
}

export default App;
