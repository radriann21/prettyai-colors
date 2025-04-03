import chroma from "chroma-js";

const MIN_CONTRAST_RATIO = 4.5;
const LAB_DISTANCE_THRESHOLD = 25;
const LIGHTNESS_ADJUSTMENT_STEP = 0.03;
const MAX_CONTRAST_ITERATIONS = 30;

const generateBackgroundColor = () => {
  return chroma.mix("#FFFFFF", "#F8F9FA", Math.random() * 0.3);
};

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

const adjustSecondaryTextColor = (primaryTextColor: chroma.Color, backgroundColor: chroma.Color) => {
  let adjustedColor = chroma.mix(primaryTextColor, backgroundColor, 0.5); 
  if (chroma.contrast(adjustedColor, backgroundColor) < 3) {
    adjustedColor = adjustedColor.darken(0.5).saturate(0.3); 
  }
  return adjustedColor;
};

export const generateRandomPalette = () => {
  const baseColor = chroma.random();

  const backgroundColor = generateBackgroundColor();
  const primaryColor = baseColor.set("hsl.l", "+0.3").set("hsl.s", "+0.2");
  const secondaryColor = primaryColor.darken(1);
  const accentColor = primaryColor.brighten(1.2).saturate(1.5);

  let primaryTextColor = adjustColorContrast(primaryColor, backgroundColor, MIN_CONTRAST_RATIO);

  if (chroma.distance(primaryTextColor, backgroundColor, "lab") < LAB_DISTANCE_THRESHOLD) {
    primaryTextColor = primaryTextColor.darken(1.5);
  }

  const secondaryTextColor = adjustSecondaryTextColor(primaryTextColor, backgroundColor);

  const colors = [
    backgroundColor.hex(),
    primaryTextColor.hex(),
    secondaryTextColor.hex(),
    primaryColor.hex(),
    secondaryColor.hex(),
    accentColor.hex(),
  ];

  return {
    color: primaryColor.hex(),
    colors,
  };
};
