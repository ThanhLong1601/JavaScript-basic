const soup = 10.3;
const burger = 8;
const iceCream = 5;

const total = soup + burger + iceCream;

console.log("Lap 01");
console.log("Total for order : ", total);

const total2 = (soup + burger + iceCream) / 3;

console.log("Lap 02");
console.log("3 friends each pays :", total2);
////////////////////////////////////////

const toaster = 18.5;
const shirt = 7.5;

const total3 = toaster + shirt * 2;

console.log("Lap 03");
console.log("Total cost :", total3);

const tax = (toaster + shirt * 2) * 0.1;

console.log("Lap 04");
console.log("Total tax: ", tax);
console.log("Total when add tax: ", total3 + tax);

const tax2 = (toaster + shirt * 2) * 0.2;

console.log("Lap 05");
console.log("Total tax: ", tax2);
console.log("Total when add tax: ", total3 + tax2);
