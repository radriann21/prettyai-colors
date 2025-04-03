import chroma from "chroma-js";

const MIN_CONTRAST_RATIO = 4.5;
const LAB_DISTANCE_THRESHOLD = 25;
const LIGHTNESS_ADJUSTMENT_STEP = 0.03;
const MAX_CONTRAST_ITERATIONS = 30;

// Función para ajustar el contraste del color
const adjustColorContrast = (textColor: chroma.Color, backgroundColor: chroma.Color, targetContrast: number) => {
  let contrast = chroma.contrast(textColor, backgroundColor);
  let adjustedColor = textColor;
  let iteration = 0;

  while (contrast < targetContrast && iteration < MAX_CONTRAST_ITERATIONS) {
    adjustedColor = adjustedColor.darken(LIGHTNESS_ADJUSTMENT_STEP);
    contrast = chroma.contrast(adjustedColor, backgroundColor);
    iteration++;
  }

  if (contrast < targetContrast && textColor.luminance() < 0.5) {
    adjustedColor = textColor;
    iteration = 0;
    while (contrast < targetContrast && iteration < MAX_CONTRAST_ITERATIONS) {
      adjustedColor = adjustedColor.brighten(LIGHTNESS_ADJUSTMENT_STEP);
      contrast = chroma.contrast(adjustedColor, backgroundColor);
      iteration++;
    }
  }

  return adjustedColor;
};

// Función para generar un color de texto secundario más visible
const adjustSecondaryTextColor = (primaryTextColor: chroma.Color, backgroundColor: chroma.Color) => {
  let adjustedColor = chroma.mix(primaryTextColor, backgroundColor, 0.5);
  if (chroma.contrast(adjustedColor, backgroundColor) < 3) {
    adjustedColor = adjustedColor.darken(0.5).saturate(0.3);
  }
  return adjustedColor;
};

export const generatePalette = (color: string): string[] => {
  if (!color || color.trim() === "") return [];

  const baseColor = chroma(color);

  const primaryColor = baseColor.set("hsl.l", "+0.2").set("hsl.s", "+0.1");
  const secondaryColor = primaryColor.darken(0.8);
  const accentColor = primaryColor.brighten(1.5).saturate(1);

  const backgroundColor = chroma("#FFFFFF");

  let primaryTextColor = adjustColorContrast(primaryColor, backgroundColor, MIN_CONTRAST_RATIO);
  
  // Asegurar que el texto primario tenga suficiente diferencia con el fondo
  if (chroma.distance(primaryTextColor, backgroundColor, "lab") < LAB_DISTANCE_THRESHOLD) {
    primaryTextColor = primaryTextColor.darken(1.5);
  }

  // Aplicar la función mejorada para el texto secundario
  const secondaryTextColor = adjustSecondaryTextColor(primaryTextColor, backgroundColor);

  return [
    backgroundColor.hex(),
    primaryTextColor.hex(),
    secondaryTextColor.hex(),
    primaryColor.hex(),
    secondaryColor.hex(),
    accentColor.hex(),
  ];
};
