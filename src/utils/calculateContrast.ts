export const calculateContrast = (hexColor: string): string => {
  if (!/^#([A-Fa-f0-9]{6})$/.test(hexColor)) {
    throw new Error("Invalid hex color");
  }
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? "#000000" : "#FFFFFF";
}