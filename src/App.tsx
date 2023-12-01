import { useState } from "react";

import { ColorCard, ColorSelector } from "./components";
import { Color } from "./types";

import "./App.css";
import Schemes from "./components/Schemes";

function App() {
  const [colors, setColors] = useState<Color[]>([]);

  const addColor = (color: Color) => setColors([...colors, color]);

  // @TODO: Add a function to remove a color from the list of colors
  const removeColor = (colorName: string) => {};

  // @TODO: Add a function to update a color's rating
  const updateColorRating = (colorName: string, rating: number) => {};

  return (
    <>
      <h1>Color Palette Builder</h1>
      <div className="card">
        <p>
          Pick a color and enter a name to start building your color palette.
        </p>
      </div>
      <ColorSelector addColor={addColor} />
      <section>
        {colors.map((color) => (
          <div key={color.name} style={{ display: "flex", gap: "10px" }}>
            <ColorCard color={color} />
            <Schemes seedColor={color} />
          </div>
        ))}
      </section>
    </>
  );
}

export default App;
