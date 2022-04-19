import React from "react";
import Details from "./components/Details";
import EducationInfo from "./components/EducationInfo";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import './components/Styles.css';

function App() {
  return (
    <div>
      <Header />
      <div class="container">
        <Details />
        <Summary />
        <EducationInfo />
        <Skills />
        <Experience />
        <Footer />
      </div>
    </div>
  );
}

export default App;
