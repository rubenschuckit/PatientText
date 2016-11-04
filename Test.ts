/**
 * Created by Ruben on 11/3/2016.
 */

const a: number = 5;
const b: number = 10;
//comment HC
function add(a: number, b: number): number {
    return a + b;
}

console.log(add(a, b));

let count = 0;
for(let i = 0; i < 5; ++i) {
    count++;
}

console.log(count);