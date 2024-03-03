import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import CardInfo from "./pages/CardInfo";
import Add from "./pages/Add";


function App() {

  return (
    <div className="App " >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardInfo />} />
        <Route path="add" element={<Add />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
