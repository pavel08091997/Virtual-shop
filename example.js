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
