import { useState } from "react";
import { Color } from "../types/colors";
import "./ColorSelector.css";

export default function ColorSelector({
  addColor,
}: {
  addColor: (color: Color) => void;
}) {
  const [colorName, setColorName] = useState("");
  const [colorValue, setColorValue] = useState("#000000");

  const onColorHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorValue(e.target.value);
  };

  const onColorNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorName(e.target.value);
  };

  const onSubmit = (e: React.FormEvent) => {
    addColor({ name: colorName, hex: colorValue, rating: 0 });
  };

  // @TODO: This isn't calling onSubmit?
  return (
    <div className="colorSelector" onSubmit={onSubmit}>
      <div>
        <label htmlFor="colorName">Color name:</label>
        <input
          className="colorName"
          id="colorName"
          name="colorName"
          type="text"
          onChange={onColorNameChange}
          required
          placeholder="Enter a unique color name"
          minLength={1}
        />
      </div>
      <div>
        <label htmlFor="color">Color:</label>
        <input
          name="color"
          id="color"
          type="color"
          onChange={onColorHexChange}
        />
      </div>
      <div>
        <button type="submit">Save Color</button>
      </div>
    </div>
  );
}
