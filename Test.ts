/**
 * Created by Ruben on 11/3/2016.
 */

const a = 5;
const b = 10;

function add(a: number, b: number): number {
    return a + b;
}

console.log(add(a, b));

let count = 0;
for(let i = 0; i < 5; ++i) {
    count++;
}

console.log(count);