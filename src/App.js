import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Hero/>
      </BrowserRouter>
    </div>
  );
}

export default App;
