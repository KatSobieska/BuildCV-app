import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router";
import Formcv from "./Components/features/Formcv";
import Home from "./Components/pages/Home";
import Header from "./Components/views/Header";

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Formcv />} />
      </Routes>
    </Container>
  );
}

export default App;
