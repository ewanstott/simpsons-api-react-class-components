const numArray = [1, 2, 3, 2, 4, 5, 4, 5];
const duplicates = numArray.filter(
  (num, index) => numArray.indexOf(num) !== index
);
