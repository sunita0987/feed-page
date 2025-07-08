import { useState } from "react";
import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import ProfileCard from "./components/ProfileCard";
import ImageCard from "./components/ImageCard";
import Blur from "./components/Blur";
import Black from "./components/Black";
import Blue from "./components/Blue";
import Card from "./components/Card";
import Block from "./components/Block";

function App() {
  return (
    <>
      <NavBar />
      <ProfileCard />
      <ImageCard />
      <Blur/>
      <Black/>
      <Blue/>
      <Card/>
      <Block/>
    </>
  );
}

export default App;
