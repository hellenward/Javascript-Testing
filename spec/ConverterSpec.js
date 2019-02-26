

describe("Cooking Ingredients Converter", function() {
  describe("Temperatures", function() {
    it("Fahrenheit to Celsius", function() {
      var result = convertFahrenheitToCelsius(100)
      console.log(result);
      expect(result).toEqual('37.8');
    });
    it("Celsius to Fahrenheit", function () {
      var result = convertCelsiusToFahrenheit(37.8)
      expect(result).toEqual('100');
    });
  });
  describe("Weight", function() {
    it("Pounds to kilos", function () {
      var result = convertPoundsToKilos(50)
      expect(result).toEqual(22.68);
    });
  });
  describe("Volume", function () {
    it("Litre To Gallons", function () {
      var result = convertLitrestoGallons(1)
      expect(result).toEqual(3.78541);
    });
  });
  describe("distance", function () {
    it("Miles to Km", function () {
      var result = convertMilesToKm(1)
      expect(result).toEqual(1.60934);
    }); 
  })
});
