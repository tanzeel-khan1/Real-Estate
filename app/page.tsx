"use client";
import React from "react";
import Nav from "./component/Nav";
import Hero from "./pages/Hero";
import Page from "./property/page";

const page = () => {
  return (
    <div>
      <Nav />
      <div className="md:pl-24 pl-12 md:pr-14 pr-8">
        <Hero />
        <Page />
      </div>
    </div>
  );
};

export default page;
