// normal function
function normalHeroFunc(a: number, b: number): string {
  const sum = a + b;
  return `Sum: ${sum}`;
}
console.log(normalHeroFunc(2, 3))


const arrowHeroFunc = (c: number, d: number): number => {
  return c + d;
}
console.log(arrowHeroFunc(4, 3))