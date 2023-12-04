import React, { useEffect, useState } from "react";
import { Color } from "../types/colors";

interface OtherColor {
  hex: { value: string };
  name: { value: string };
}

const Scheme: React.FC<{ seedColor: Color; mode: string }> = ({
  seedColor,
  mode,
}) => {
  const [colors, setColors] = useState<OtherColor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPalette(seedColor, mode);
  }, []);

  const fetchPalette = (color: Color, mode: string) => {
    fetch(
      `https://www.thecolorapi.com/scheme?hex=${color.hex.substring(
        1,
      )}&mode=${mode}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setColors(data.colors);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    const colorContainer = document.getElementById(
      `${seedColor.hex.substring(1)}-${mode}-scheme-container`,
    );
    colors.forEach((color) => {
      const colorDiv = document.createElement("div");
      colorDiv.style.backgroundColor = color.hex.value;
      colorDiv.style.color = color.hex.value;
      colorDiv.innerHTML = color.name.value;
      colorDiv.style.display = "inline-block";
      colorDiv.style.overflow = "hidden";
      colorDiv.style.height = "12px";
      colorDiv.style.width = "55px";
      if (colorContainer) colorContainer.appendChild(colorDiv);
    });
  }, [colors]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div id={`${seedColor.hex.substring(1)}-${mode}-scheme-container`} />;
};

const Schemes: React.FC<{ seedColor: Color }> = ({ seedColor }) => {
  const modes = [
    "monochrome",
    "monochrome-dark",
    "monochrome-light",
    "analogic",
    "complement",
    "analogic-complement",
    "triad",
    "quad",
  ];

  return (
    <div>
      {modes.map((mode) => (
        <Scheme key={mode} seedColor={seedColor} mode={mode} />
      ))}
    </div>
  );
};

export default Schemes;
