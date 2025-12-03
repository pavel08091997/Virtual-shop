const count = () => {
  let counter = 0;
  return function () {
    return (counter = counter + 1);
  };
};

const num = count();

console.log(num());
console.log(num());
console.log(num());
console.log(num());
console.log(num());
console.log(num());

const fruits = {
  apple: "red",
  orange: "orange",
  banana: "yellow",
};

// const newFruits = {
//   apple: "green",
//   orange: "orange",
//   banana: "yellow",
// };

const newFruits = {...fruits,  apple: 'green'}
console.log(newFruits)
