import chroma from "chroma-js";

export const generatePalette = (color: string) => {
  if (color === '' || !color) return []
  const colors = chroma.scale([color, chroma(color).darken(2)]).colors(5)
  return colors
}