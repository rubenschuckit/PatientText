/**
 * Created by Ruben on 11/3/2016.
 */

interface Student {
    firstName: string;
    age: number;
    isHappy: boolean;
}

const a: number = 5;
const b: number = 10;

function add(a: number, b: number): number {
    return a + b;
}

console.log(add(a, b));

let count = 0;
for(let i = 0; i < 5; ++i) {
    count++;
}

const firstName: string = "Ruben";

const ruben: Student = {firstName, age: 20, isHappy: false};
console.log(count);

