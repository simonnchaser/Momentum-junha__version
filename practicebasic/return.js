const ageOfForeigner = parseInt(prompt("what is your age? :"));

function calculatorKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const krAge = calculatorKrAge(ageOfForeigner);

console.log(`your korean age is ${krAge}`);
