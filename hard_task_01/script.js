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

let rest = [];
let totalSum = [];

const getAveragePriceGoods = () => {
  for (let i = 0; i < allCashbox.length; i++) {
    rest[i] = [allCashbox[i][1] / allCashbox[i][0]];
  }
  totalSum = (rest.flat().reduce((sum, current) => sum + current, 0) / allCashbox.length);

  console.log(Math.round(totalSum));
}

getAveragePriceGoods();


