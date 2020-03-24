const testFunction = (x = 15, y = x + 4) => {
  console.log(x, y);
}

testFunction(null);