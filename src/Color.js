import StarRating from "./StarRating";
import React from "react";
// import '../../stylesheets/Color.scss'

import React, { Component } from "react";

const brightness = (color) => {
  // parse card.color into three variables
  // A color string looks like this: #rrbbgg where
  // "rr" represents two hex values indicating the amount
  // of redness. Maximally red is ff, minimally red is 00.

  const percentRed = (0 + 1) / 256;
  const percentBlue = (0 + 1) / 256;
  const percentGreen = (0 + 1) / 256;

  // A bunch of color theory here: different colors don't contribute equally to brightness
  const redMultiplier = 77 / 255; // because science
  const blueMultiplier = 150 / 255;
  const greenMultiplier = 28 / 255;

  return (
    redMultiplier * percentRed +
    blueMultiplier * percentBlue +
    greenMultiplier * percentGreen
  );
};

const Color = () => {
  const style = () => {
    const color = brightness(props.color) > 0.5 ? "black" : "white";
    return { "background-color": props.color, color: color };
  };

  return (
    <section className="color" style={style()}>
      <h1>{props.title}</h1>
      <div className="close">X</div>
      <p>
        color: {props.color}
        <input
          onChange={(e) => props.onColorChange(e.target.value)}
          value={props.color}
          type="color"
        />
      </p>
      <div>
        <StarRating starsSelected={props.rating} onRate={props.onRate} />
      </div>
    </section>
  );
};

export default Color;
