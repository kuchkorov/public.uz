import React from "react";
import Counter from "../../components/counter/Counter";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import Indexation2 from "../../components/indexation/Indexation2";
import Journals from "../../components/journals/Journals";

function Main() {
  return (
    <>
      <Hero />
      <Indexation2 />
      <Journals />
      <Counter />
      <Footer />
    </>
  );
}

export default Main;
