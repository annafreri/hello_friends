export const useImagePath = (name: string, mainWeather: string): string => {
  const weather = mainWeather.toLowerCase();
  const weatherConditionsWithImage = ['clouds', 'rain', 'snow', 'drizzle'];

  if (weatherConditionsWithImage.includes(weather)) {
    return `assets/${name}_${weather}.svg`;
  }
  
  return `assets/${name}.svg`;
};