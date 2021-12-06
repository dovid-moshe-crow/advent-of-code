import { readFile } from "./io";

type Direction = "forward" | "up" | "down";

interface Instruction {
  direction: Direction;
  steps: number;
}

let instructions = readFile(2)
  .split("\n")
  .map((line) => {
    const [direction, steps] = line.split(" ");
    return { direction, steps: Number(steps) } as Instruction;
  });

let hPosition = 0;
let depth = 0;

for (let instruction of instructions) {
  switch (instruction.direction) {
    case "forward":
      hPosition += instruction.steps;
      break;
    case "up":
      depth -= instruction.steps;
      break;
    case "down":
      depth += instruction.steps;
      break;
  }
}

console.log(hPosition * depth);

hPosition = 0;
depth = 0;
let aim = 0;

for (let instruction of instructions) {
  switch (instruction.direction) {
    case "down":
      aim += instruction.steps;
      break;
    case "up":
      aim -= instruction.steps;
      break;
    case "forward": {
      hPosition += instruction.steps;
      depth += aim * instruction.steps;
      break;
    }
  }
}

console.log(hPosition * depth);
