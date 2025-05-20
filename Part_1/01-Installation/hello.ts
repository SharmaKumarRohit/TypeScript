var person: string = "Rohit";
console.log(person);

var age: number = 23;
console.log(age);

var college = "B.C College";
console.log(college);

var name_: string = "Rohit";
console.log(name_);

function randomNumber(n: number): number[] {
  const nums: number[] = [];
  for (let i = 0; i < n; i++) {
    let num = Math.floor(Math.random() * 10);
    nums.push(num);
  }
  return nums;
}

console.log(randomNumber(5));
