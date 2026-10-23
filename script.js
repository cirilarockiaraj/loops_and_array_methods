console.log("1 — Looping Through an Array");
let names = [10, 20, 30, 40];
console.log("Indexed for loop: \n------------");
for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
console.log("for each function: \n------------\n");
names.forEach(name => {
    console.log(name);
});
console.log("for of loop: \n------------\n");
for(let name of names) {
    console.log(name);
}
console.log("for in loop: \n------------\n");
for(let index in names) {
    console.log(names[index]);
}
console.log("------------\n");


console.log("2 — Loop Through an Object");
console.log("------------");
const student = {
  name: "Bala",
  age: 21,
  grade: "A"
};

for(let index in student) {
    console.log(`${index} ${student[index]}`);
}
console.log("------------\n");

console.log("3 — Using map()");
console.log("------------");
const marks = [50, 60, 70, 80];

const reduceMark = marks.map(mark => mark - 10);
console.log(reduceMark);
console.log("------------\n");

console.log("4 — Using filter()");
console.log("------------");
const values = [5, 12, 8, 25, 3, 15];
const filterAboveTen = values.filter(value => value > 10);
console.log(filterAboveTen);
console.log("------------\n");

console.log("5 — Using reduce()");
const nums = [5, 10, 15, 20];
const sum = nums.reduce((previousCount, currentValue) => previousCount + currentValue, 0);
console.log(sum);
console.log("------------\n");