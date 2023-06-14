import "./App.css";
import { useState } from "react";
import ColorSelector from "./components/ColorSelector";
import ColorCard from "./components/ColorCard";
import { Color } from "./types/colors";

function App() {
  const [colors, setColors] = useState<Color[]>([]);

  // Add a color to the list of colors
  const addColor = (color: Color) => {
    setColors([...colors, color]);
  };

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
          <ColorCard key={color.name} color={color} />
        ))}
      </section>
    </>
  );
}

export default App;
