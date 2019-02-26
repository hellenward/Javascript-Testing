

describe("Cooking Ingredients Converter", function() {
  describe("Temperatures", function() {
    it("Fahrenheit to Celsius", function() {
      function convertFahrenheitToCelsius(num) {
        let num2 = (num - 32)/1.8;
        let num3 = Math.round(num2 * 10) / 10;
        return num3.toString();
      };
      var result = convertFahrenheitToCelsius(100)
      console.log(result);
      expect(result).toEqual('37.8');
    });
  });
});
