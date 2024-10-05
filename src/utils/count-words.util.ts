const countWords = (arr: any[]) =>
  arr.reduce((acc, item) => {
    acc[item] = acc[item] ? acc[item] + 1 : 1;
    return acc;
  }, {});

export default countWords;

const elem = document.createElement("div");

const age = "age";

const mapObj = new Map();

mapObj.set(elem, 5);
// const obj = {
//   [elem]: 5
// }
