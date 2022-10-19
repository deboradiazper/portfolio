import { Route, Routes, Link } from "react-router-dom";

import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { NotFound } from "./Pages/NotFound";
import { Contact } from "./Pages/Contact";


function App() {

  return (
  <>
  <nav>
    <ul>
      <p>
        <Link to="/">Home</Link>
      </p>
      {/* <p>
        <Link to="/about">about</Link>
      </p>
      <p>
        <Link to="/contact">contact</Link>
      </p> */}
  </ul>
  </nav>

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  </>
  );
}

export default App;
