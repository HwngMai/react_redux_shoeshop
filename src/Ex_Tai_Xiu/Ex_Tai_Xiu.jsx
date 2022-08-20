import React from "react";
import bgGame from "../Assets/bgGame.png";
import "./game.css";
import XucXac from "./XucXac";
import KetQua from "./KetQua";
const Ex_Tai_Xiu = () => {
  return (
    <div
      className='bg_game'
      style={{
        backgroundImage: `url(${bgGame})`,
        width: "100vw",
        height: "100vh",
      }}>
      <XucXac />
      <KetQua />
    </div>
  );
};

export default Ex_Tai_Xiu;
