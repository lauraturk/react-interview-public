import React, { Component } from "react";
// import '../stylesheets/ColorList.scss'

const ColorList = () => {
  return (
    <div className="color-list">
      {props.colors.length === 0 ? (
        <p>No Colors Listed. (Add a Color)</p>
      ) : (
        props.colors.map((color) => (
          <Color
            key={color.title}
            {...color}
            onRate={(rating) => props.onRate(color.title, rating)}
            onRemove={() => props.onRemove(color.title)}
          />
        ))
      )}
    </div>
  );
};

export default ColorList;
