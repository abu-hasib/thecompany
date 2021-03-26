// import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer";
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Team from "./components/Team";

function App() {
  return (
    <>
        <div className="wrapper">
          <Hero></Hero>
          <Showcase></Showcase>
          <Team></Team>
          <Footer></Footer>
        </div>
        <div className="mobileWrapper">
          <h1>This page is best viewed on a desktop...</h1>
        </div>
    </>
  );
}

export default App;

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