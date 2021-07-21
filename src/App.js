import React, { useState } from "react";

import AddColorForm from "./AddColorForm";
import ColorList from "./ColorList";
import { v4 } from "uuid";
// import './stylesheets/APP.scss'

const App = () => {
  const [colors, setColorList] = useState([]);

  const addColor = (title, color) => {
    setColorList((prevState) => ({
      colors: [
        ...prevState.colors,
        {
          title,
          color,
          rating: 0,
        },
      ],
    }));
  };

  const changeColor = (colorTitle, property, newValue) => {
    setColorList((prevState) => ({
      colors: prevState.colors.map((color) =>
        color.title !== colorTitle
          ? color
          : {
              ...color,
              [property]: newValue,
            }
      ),
    }));
  };

  const removeColor = (colorTitle) => {
    setColorList((prevState) => ({
      colors: prevState.colors.filter((color) => color.title !== colorTitle),
    }));
  };

  return (
    <div className="app">
      <AddColorForm onNewColor={addColor} />
      <ColorList colors={colors} onRate={rateColor} onRemove={removeColor} />
    </div>
  );
};

export default App;
