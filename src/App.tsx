import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./containers/Dashboard/Dashboard";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <br />
        <br />
        <Routes>
          <Route path="/" element={<>Home</>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<>Contact</>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
