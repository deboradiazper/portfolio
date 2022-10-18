import { Route, Routes, Link } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { NotFound } from "./Pages/NotFound";

function App() {
  return (
  <>
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">about</Link>
    </li>
  </ul>
    
  </nav>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  </>
  );
}

export default App;