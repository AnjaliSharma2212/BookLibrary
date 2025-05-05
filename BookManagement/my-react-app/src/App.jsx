import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import BookDetails from "./components/BookDetails";
import { ThemeProvider } from "./context/themeContext";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <ThemeProvider>
        <NavBar />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book/:id" element={<BookDetails />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
