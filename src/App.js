import "./App.css";
import { Route, Routes } from "react-router-dom";
import Books from "./pages/Books";
import { Authors } from "./pages/Authors";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import { Home } from "./pages/Home";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
