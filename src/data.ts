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


export function getTemperatureInfo(temperature: number): { TOG: number; wear: any[] } {
  // Get all the keys from TemperatureInfo and convert them to numbers
  const keys = Object.keys(TemperatureInfo).map(Number);

  // Find the closest key to the given temperature
  const closestKey = keys.reduce((prev, curr) =>
    Math.abs(curr - temperature) < Math.abs(prev - temperature) ? curr : prev
  );

  // Return the corresponding TemperatureInfo for the closest key
  return TemperatureInfo[closestKey];
}
