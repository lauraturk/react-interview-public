import { Color } from "../types";
import { getLegibleTextColor, hexToRgb } from "../util";

interface Props {
  color: Color;
}

export function ColorCard({ color: { name, hex, rating } }: Props) {
  const backgroundColor = hex;
  const contrastingColor = getLegibleTextColor(hex);
  const color = contrastingColor;

  // @TODO: implement hexToRgb and pass rgb() color to `style` prop.
  // const color = hexToRgb(contrastingColor);

  return (
    <div className="colorCard" style={{ backgroundColor, color }}>
      <h2>Name: {name}</h2>
      <p>
        Color: {hex} <input type="color" value={hex} />
      </p>
      <div>Rating: {rating}</div>
    </div>
  );
}
