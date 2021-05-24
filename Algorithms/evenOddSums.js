// EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex. evenOddSums([50, 60, 60, 45, 71]) === [170, 116]

function evenOddSums(array) {
  let evenSum = 0;
  let oddSum = 0;

  array.forEach(number =>
    number % 2 === 0 ? (evenSum += number) : (oddSum += number)
  );

  return [evenSum, oddSum];
}

console.log('EVEN_ODD_SUMS', evenOddSums([50, 60, 60, 45, 71]));
