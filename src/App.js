  import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
  import NavBar from "./components/NavBar";
  import Home from "./components/Home";
  import Cart from "./components/Cart";
  import NotFound from "./components/NotFound";

  import './App.css';

  function App() {
  return (
    <BrowserRouter className="App">
    <NavBar />
    <Routes>
    <Route path="/Cart" Component={Cart}/>
    <Route path="/not-found" Component={NotFound}/>
    <Route path="*" element={<Navigate to="/not-found" />}  />
    <Route exact path="/" Component={Home}/>
    </Routes>
    </BrowserRouter>
  );
  }

  export default App;
