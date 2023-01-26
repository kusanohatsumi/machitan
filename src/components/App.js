import { Header } from "./Header";
import { Start } from "./Start";
import { Footer } from "./Footer";

import '../scss/App.scss';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Start />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
