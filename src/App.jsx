
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Routes, Route } from "@solidjs/router";
import Contact from "./components/Contact";
import About from "./components/About";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
