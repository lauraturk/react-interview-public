import { HexColor } from "../types";

export function getLegibleTextColor<
  YieldedColors extends string = "white" | "black",
>(colorHex: HexColor) {
  // @TODO: given a color hex string (e.g. #FF0000) return "white" if the color is dark
  // and "black" if the color is light
  const result = "white" as const;

  return result as YieldedColors;
}
