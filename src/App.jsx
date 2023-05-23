import { Routes, Route } from "@solidjs/router";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Services from "./components/Services";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Public from "./components/Public";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" component={Landing} />
        <Route path="/public" component={Public}>
          <Route path="/" component={Home} />
          <Route path="/contacts" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
