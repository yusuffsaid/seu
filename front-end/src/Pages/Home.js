import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HomeAbout from "../components/Home-about/HomeAbout";
import Skils from "../components/Home-skills/Skils";
import Timeline from "../components/Timeline/Timeline";
const Home = () => {
  return (
    <div>
      <Header></Header>
      <HomeAbout></HomeAbout>
      <Skils></Skils>
      <Timeline></Timeline>
      <Footer></Footer>
    </div>
  );
};

export default Home;
