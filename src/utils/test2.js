const products = [
  { name: "juice", quantity: 23 },
  { name: "water", quantity: 13 },
  { name: "milk", quantity: 48 },
  { name: "chocolate", quantity: 35 },
];

const totalQuantity = (array) => {
  let result = products.reduce((acc, item) => acc + item.quantity, 0);
  return result;
};
console.log(totalQuantity(products));

const quantity = products.reduce((acc, item) => acc + item.quantity, 0);

console.log("quantity", quantity);

const priceList = (array) => {
  const priceList = array.map((item) => ({ id: item.id, name: item.name }));

  return priceList;
};
