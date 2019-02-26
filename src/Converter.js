/** Unit Converter **/
function convertFahrenheitToCelsius(temperature) {
    let num2 = (temperature - 32)/1.8;
    let num3 = Math.round(num2 * 10) / 10;
    return num3.toString();
  };

function convertCelsiusToFahrenheit(temperature) {
  let num2 = (temperature * 1.8) + 32;
  console.log(num2);
  let num3 = Math.round(num2 * 10) / 10;
  console.log(num3);
  return num3.toString();
}

function convertPoundsToKilos(pounds) {
  let kilo = (pounds * 0.4536);
  return kilo;
}

function convertLitrestoGallons(litres) {
  let gallons = (litres * 3.78541);
  return gallons;
}

function convertMilesToKm(miles) {
  let km = (miles * 1.60934);
  return km; 
}
