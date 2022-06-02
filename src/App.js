import React from "react";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Featured />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
