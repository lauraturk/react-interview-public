import { render, screen, fireEvent } from "@testing-library/react";
import ColorCard, { getLegibleTextColor } from "./ColorCard";

describe("ColorCard", () => {
  it("should return legible text color for a given color", () => {
    expect(getLegibleTextColor("#000000")).toBe("white");
    expect(getLegibleTextColor("#FFFFFF")).toBe("black");
  });
});
