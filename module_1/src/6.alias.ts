type HeroIncomeType = number | string;
type HeroIncomeIsOkayType = boolean;

const heroIncome: HeroIncomeType = "34";
const herIncomeIsOkay: HeroIncomeIsOkayType = true;

type HeroType = {
  name: string;
  age: number;
  profession?: string;
};

const hero4: HeroType = {
  name: "khan",
  age: 32,
  profession: "Developer",
};

const hero5: HeroType = {
  name: "siam",
  age: 30,
};

const hero6: HeroType = {
  name: "jalil",
  age: 35,
};

// define type for a function
// const addToNumber = (num1, num2) => num1 + num2;

// this function with type will be like this
type AddNumberType = (num1: number, num2: number) => number;
const addToNumber: AddNumberType = (num1, num2) => num1 + num2;
