import { Color } from "../types/colors";

export const getLegibleTextColor = (color: string): "white" | "black" => {
  // @TODO: parse Color.hex into three variables
  // A color hex looks like this: #rrbbgg where
  // "rr" represents two hex values indicating the amount
  // of redness. Maximally red is ff, minimally red is 00.

  const percentRed = (0 + 1) / 256;
  const percentBlue = (0 + 1) / 256;
  const percentGreen = (0 + 1) / 256;

  // A bunch of color theory here: different colors don't contribute equally to brightness
  const redMultiplier = 77 / 255; // because science
  const blueMultiplier = 150 / 255;
  const greenMultiplier = 28 / 255;

  if (
    redMultiplier * percentRed +
      blueMultiplier * percentBlue +
      greenMultiplier * percentGreen >
    0.5
  )
    return "black";

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
