import { useState } from "react";
import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <>
      <NavBar />
      <ProfileCard/>
    </>
  );
}

export default App;
