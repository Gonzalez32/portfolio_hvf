// import logo from "./logo.svg";
import "./App.css";
import "bulma/package.json";
import "bulma/css/bulma.css";
// import Navbar from "./components/Navbar";
// import Header from "./components/Header";
// import About from "./components/About";
import Sicky_note from "./components/Sicky_note";
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
      {/* <Navbar />
      <Header />
      <About /> */}
      <Sicky_note />
      <Footer />
    </>
  );
}

export default App;
