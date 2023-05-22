/* @refresh reload */
import { render } from "solid-js/web";
import { lazy } from "solid-js";
import "./index.css";
import App from "./App";

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

import { Router, Routes, Route } from "@solidjs/router";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?"
  );
}

render(
  () => (
    <>
      <Router>
        <Routes>
          <Route path="/" component={App} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Routes>
        <App />
      </Router>
    </>
  ),
  root
);
