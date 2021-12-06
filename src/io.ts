import fs from 'fs';

export function readFile(day: number): string {
    return fs.readFileSync(`${__dirname}/input/day${day}.txt`).toString();
}