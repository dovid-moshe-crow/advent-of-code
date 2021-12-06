import { readFile } from "./io";


let measurements = readFile(1).split("\n").map(Number);


console.log(measurements.reduce((p,c,i,a) => c > a[i-1] ? p + 1 : p, 0));




let count = 0;

let last : number | null = null;

for (let i = 0; i < measurements.length; i++) {
    const n = measurements.slice(i, i+3).reduce((a, b) => a + b);
    if(last){
        if( n > last) count++;
    }
    last = n;
}

console.log(count);
