import chroma from "chroma-js";

export const generateRandomPalette = () => {
  const color = chroma.random().hex()
  const colors = chroma.scale([color, chroma(color).darken(2)]).colors(6)
  return {
    color,
    colors
  }
}