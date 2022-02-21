import "./App.css";
import Header from "./components/header.js";
import Body from "./components/body.js";
import Roadmap from "./components/roadmap";
import About from "./components/aboutus";
import FAQ from "./components/faq";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Roadmap />
      <About />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
