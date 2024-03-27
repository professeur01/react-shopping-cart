  import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
  import NavBar from "./components/NavBar";
  import Home from "./components/Home";
  import Cart from "./components/Cart";
  import './App.css';

  function App() {
  return (
    <BrowserRouter className="App">
    <NavBar />
    <Routes>
    <Route path="/Cart" Component={Cart}/>
    <Route exact path="/" Component={Home}/>
    </Routes>
    </BrowserRouter>
  );
  }

  export default App;
