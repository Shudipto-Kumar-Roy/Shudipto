import React from "react";
import Banner from "../components/Banner";
import Caresoul from "../components/Caresoul";
import Header from "../components/Header";
import TopProduct from "../components/TopProduct";

const Home = () => {
  return (
    <div className="w-screen h-auto bg-[#ffffff]">
      <Header />
      <Banner />
      <Caresoul />
      <TopProduct />
    </div>
  );
};

export default Home;
