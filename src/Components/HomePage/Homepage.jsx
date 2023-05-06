import React, { useState } from "react";
import TopBanner from "./TopBanner";
import Navigationbar from "../NavigationBar/Navigationbar";
import Card from "../Card/Card";
import Card2 from "../Card/Card2";
import Card3 from "../Card/Card3";
import Card4 from "../Card/Card4";
import RecomenondedGroups from "../RecomondedGroups/RecomenondedGroups";
import NavBar from "../Navbar/Navbar";

const Homepage = () => {
  return (
    <div className="relative">
      <NavBar></NavBar>
      <TopBanner></TopBanner>
      <div className="max-w-[1040px] mx-auto">
        <div className="mt-[32px] mb-[24px] lg:sticky lg:top-0 z-40">
          <Navigationbar></Navigationbar>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 ">
          <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start lg:space-y-8 space-y-[6px] sm:mx-auto col-span-2">
            <Card></Card>
            <Card2></Card2>
            <Card3></Card3>
            <Card4></Card4>
          </div>
          <div className="col-span-1 hidden lg:flex  justify-end">
            <RecomenondedGroups></RecomenondedGroups>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
