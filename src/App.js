// import logo from "./logo.svg";
import "./App.css";
import "bulma/package.json";
import "bulma/css/bulma.css";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Footer from "./components/Footer";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <Home />
      <About />
      <Services />
      <Work />
      <Footer />
    </>
  );
}

export default App;
