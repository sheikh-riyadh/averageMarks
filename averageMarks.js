/* Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and
Bangla of a student. */

/* Subjects */
let mathematics = 75.25;
let biology = 65;
let chemistry = 80;
let physics = 35.45;
let bangla = 99.50;

let totalsMarks = mathematics + biology + chemistry + physics + bangla;

let average = totalsMarks / 5;
average = average.toFixed(2);

console.log("Average number is:", average);