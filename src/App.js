// import logo from "./logo.svg";
import "./App.css";
import "bulma/package.json";
import "bulma/css/bulma.css";
import Home from "./components/Home";
// import Navbar from "./components/Navbar";
// import Header from "./components/Header";
// import About from "./components/About";

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
      {/* <Navbar />
      <Header />
      <About /> */}
      <Footer />
    </>
  );
}

export default App;
