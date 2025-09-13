function calculateCompoundInterest(principal, rate, timesCompounded, years) {
  const amount = principal * Math.pow((1 + rate / timesCompounded), timesCompounded * years);
  return amount;
}

const principal = 1500;
const annualRate = 0.043;
const timesCompounded = 12;
const years = 6;

const finalAmount = calculateCompoundInterest(principal, annualRate, timesCompounded, years);
console.log(`The amount after ${years} years is rupees ${finalAmount.toFixed(2)}`);