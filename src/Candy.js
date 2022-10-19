import React, { useState } from "react";
import candyImg from "./Candy.jpeg";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./Chips.css";

function Candy() {

  const [bars, setBars] = useState([]);

  function handleClick() {
    const x = window.innerWidth * Math.random();
    const y = window.innerHeight * Math.random();
    setBars(prevBars => [...prevBars, { x, y }]);
  }

  const b = bars.map((bar, i) => (
    <img
      key={i}
      src={candyImg}
      className="bar"
      style={{ top: `${bar.y}px`, left: `${bar.x}px` }}
      alt="snickers bar"
    />
  ));
  return (
    <div className="Candy">
      <Message>
        <h1>bags eaten: {bars.length}</h1>
        <button onClick={handleClick}>nom nom nom</button>
        <h1>
          <Link to="/">go back</Link>
        </h1>
      </Message>
      {b}
    </div>
  );
}

export default Candy;