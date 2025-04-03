import chroma from "chroma-js";

export const generateRandomPalette = () => {
  const baseColor = chroma.random();

  const primaryColor = baseColor.set("hsl.l", "+0.2").set("hsl.s", "+0.1");

  const secondaryColor = primaryColor.darken(0.8); 
  const accentColor = primaryColor.brighten(1.5).saturate(1); 

  const backgroundColor = chroma("#FFFFFF");
  const primaryTextColor = chroma.contrast(primaryColor, backgroundColor) > 4.5 ? primaryColor : primaryColor.darken(2);
  const secondaryTextColor = chroma.mix(primaryTextColor, backgroundColor, 0.75);

  const colors = [
    backgroundColor.hex(),      
    primaryTextColor.hex(),
    secondaryTextColor.hex(),  
    primaryColor.hex(),    
    secondaryColor.hex(),        
    accentColor.hex(),           
  ]

  return {
    color: primaryColor.hex(), 
    colors,                    
  }
}