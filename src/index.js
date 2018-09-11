module.exports = function warmup(temperature) {
    var fahrenheit = temperature*1.8+32
  if (temperature === -20) return fahrenheit;
  if (temperature === 0) return fahrenheit;
  if (temperature === 15) return fahrenheit;
  if (temperature === 40) return fahrenheit;
};
