
import styles from "./App.module.css";
import { A } from "@solidjs/router";

function App() {
  return (
    <>
      <div >
        <header >
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            
            href="https://github.com/solidjs/solid"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Solid
          </a>
          <A href="/about">About</A> 
          <A href="/contact">Contact</A>
          
        </header>
      </div>
    </>
  );
}

export default App;
