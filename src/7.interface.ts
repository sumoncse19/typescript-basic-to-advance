interface IHeroInterface {
  name: string;
  age: number;
  profession?: string;
}
// interface Z = number;
const hero8: IHeroInterface = {
  name: "siam ahmed",
  age: 34
}

type HeroType1 = {
  name: string;
  age: number;
}
type ABC = number;

const hero7: HeroType1 = {
  name: "siam ahmed",
  age: 34
}


// interface sudho matro object niye kaj kore, type alias sob dhoroner data niye kaj kore.