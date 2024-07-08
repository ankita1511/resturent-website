import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import Login from './pages/Login';
import Protected from "./pages/Protected";
import Cart from "./pages/Cart";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Protected Component={Home}/>} />
          <Route path="/about" element={<Protected Component={About}/>} />
          <Route path="/contact" element={<Protected Component={Contact} />} />
          <Route path="/menu" element={<Protected Component={Menu} />} />
          <Route path="/cart" element={<Protected Component={Cart} />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;