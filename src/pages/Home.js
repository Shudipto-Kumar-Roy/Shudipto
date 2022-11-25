import React from "react";
import Banner from "../components/Banner";
import Caresoul from "../components/Caresoul";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="w-screen h-auto bg-[#ffffff]">
      <Header />
      <Banner />
      <Caresoul />
    </div>
  );
};

export default Home;
