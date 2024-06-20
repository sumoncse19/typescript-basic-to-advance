// normal function with set default value
function normalHeroFunc(a: number, b: number = 10): string {
  const sum = a + b;
  return `Sum: ${sum}`;
}
console.log(normalHeroFunc(2, 3));

// Arrow function
const arrowHeroFunc = (c: number, d: number): number => {
  return c + d;
};
console.log(arrowHeroFunc(4, 3));

// Object --> function --> method
const nobDev = {
  name: "Sumon",
  balance: "0",
  addBalance(balance: number): string {
    return `My current balance is: ${this.balance + balance}`;
  },
};

const arr: number[] = [1, 4, 10];
// const newArray = arr.map((elem) => elem * elem)
const newArray: number[] = arr.map((elem: number): number => elem * elem);
