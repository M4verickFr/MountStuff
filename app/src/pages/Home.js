import React from "react";

import '../style/home.css';
import Activity from "../components/activity";

const Home = () => (
  <div id="home">
    <section id="home-container">
      <div id="hcl">  
        <img src={"/assets/hcl_bg.png"} />
        <div>
          <h1>Mount Stuff</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
      </div>
      <div id="hcr">  
        <img src={"/assets/hcr_bg.png"} />
      </div>
    </section>
    <section id="activities-container">
      <h1>All equipment for all activities</h1> 
      <div id="activities"> 
          <Activity name="Skiing" src="/assets/activity_skiing.jpg"/>
          <Activity name="Hiking" src="/assets/activity_hiking.jpg"/>
          <Activity name="Skiing" src="/assets/activity_skiing.jpg"/>
          <Activity name="Hiking" src="/assets/activity_hiking.jpg"/>
      </div>
    </section>
  </div>
);

export default Home;
