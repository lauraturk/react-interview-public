import { Color } from "../types/colors";

export const getLegibleTextColor = (colorHex: string): "white" | "black" => {
  // @TODO: given a color hex string (e.g. #FF0000) return "white" if the color is dark
  // and "black" if the color is light
  return "white";
};

export default function ColorCard({ color }: { color: Color }) {
  return (
    <div
      className="colorCard"
      style={{
        backgroundColor: color.hex,
        color: getLegibleTextColor(color.hex),
      }}
    >
      <h2>Name: {color.name}</h2>
      <p>
        Color: {color.hex} <input type="color" value={color.hex} />
      </p>
      <div>Rating: {color.rating}</div>
    </div>
  );
}
