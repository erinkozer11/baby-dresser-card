import { longSleeveIcon, sleevelessIcon } from './icons';

// Enum for wear item to image URL mapping
export const WearImages = {
  "Long sleeve pyjamas": longSleeveIcon,
  "Sleeveless Bodysuit": sleevelessIcon,
  // Add other items here as needed
}

// TemperatureInfo object with wear items mapped to image URLs
export const TemperatureInfo: { [key: number]: { TOG: number, wear: any[] } } = {
  15: {
    TOG: 3.5,
    wear: [
      WearImages["Sleeveless Bodysuit"],
      WearImages["Long sleeve pyjamas"]
    ]
  },
  17: {
    TOG: 3.5,
    wear: [
      WearImages["Sleeveless Bodysuit"],
      WearImages["Long sleeve pyjamas"]
    ]
  },
  19: {
    TOG: 3.5,
    wear: [WearImages["Long sleeve pyjamas"]]
  },
  21: {
    TOG: 2.5,
    wear: [
      WearImages["Sleeveless Bodysuit"],
      WearImages["Long sleeve pyjamas"]
    ]
  },
  23: {
    TOG: 1.0,
    wear: [WearImages["Long sleeve pyjamas"]]
  },
  25: {
    TOG: 0.2,
    wear: [WearImages["Long sleeve pyjamas"]]
  },
  27: {
    TOG: 0.2,
    wear: [WearImages["Sleeveless Bodysuit"]]
  }
};


// Function to get the temperature info based on a given temperature (rounding to nearest key)
export function getTemperatureInfo(temperature: number): { TOG: number; wear: string[] } {
  // Round to nearest integer
  const roundedTemp = Math.round(temperature);
  
  // Access TemperatureInfo using the rounded value
  return TemperatureInfo[roundedTemp];
}
