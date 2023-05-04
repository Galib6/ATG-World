import React from "react";
import TopBanner from "./TopBanner";
import Navigationbar from "../NavigationBar/Navigationbar";
import Card from "../Card/Card";

const Homepage = () => {
  return (
    <div>
      <TopBanner></TopBanner>
      <div className="max-w-[1040px] mx-auto">
        <div className="my-[32px]">
          <Navigationbar></Navigationbar>
        </div>
        <Card></Card>
      </div>
    </div>
  );
};

export default Homepage;
