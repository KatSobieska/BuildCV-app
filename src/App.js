import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router";
import Formcv from "./Components/features/Formcv";
import Home from "./Components/pages/Home";
import Info from "./Components/pages/Info";
import Header from "./Components/views/Header";
import Footer from "./Components/views/Footer";

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Formcv />} />
        <Route path="/info" element={<Info />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
