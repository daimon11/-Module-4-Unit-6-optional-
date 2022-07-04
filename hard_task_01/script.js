const allCashbox = [
  [12, 4500],
  [7, 3210],
  [4, 650],
  [3, 1250],
  [9, 7830],
  [1, 990],
  [6, 13900],
  [1, 370]
];
console.log(allCashbox);
let rest = [];
let totalSum = [];
let sum = 0;

const getAveragePriceGoods = () => {
  for (let i = 0; i < allCashbox.length; i++) {
    rest[i] = [allCashbox[i][1] / allCashbox[i][0]];
  }
  totalSum = rest.flat();
  for (let k = 0; k < totalSum.length; k++) {
    sum += totalSum[k];
  }
  console.log(Math.round(sum / allCashbox.length));
}

getAveragePriceGoods();


