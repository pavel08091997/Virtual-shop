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

const users = [{
  title: 'test',
  count: 1,
},
{
  title: 'dsadas',
  count: 1,
}
]

users[0].count +=1

console.log(users)


// const array = [1, 2, 3]
// array.push(4)
// array.pop()

// setArray([...array, 4])