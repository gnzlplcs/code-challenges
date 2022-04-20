function statsFinder(array) {
  return [mean(array), mode(array)];
}

const mean = (arr) => {
  let sum = 0;
  arr.map((item) => (sum += item));
  return parseFloat((sum / arr.length).toFixed(2));
};

const mode = (arr) => {
  const hist = {}
  for (let x of arr) {
    hist[x] = 1 + (hist[x] || 0)
  }
  let mode = ''
  let count = 0
  for (let x of arr.reverse()) {
    if (hist[x] >= count) {
      mode = x
      count = hist[x]
    }
  }
  return mode;
};

console.log(statsFinder([500, 400, 400, 375, 300, 350, 325, 300]));
