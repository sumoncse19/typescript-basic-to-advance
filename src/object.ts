const heroObj: {
  heroName: string;
  readonly age: number;
  profession: string;
  isMarried: boolean;
  isFamous?: boolean;
  movieCount: number;
} = {
  heroName: "Khan",
  age: 32,
  profession: 'Actor',
  isMarried: false,
  movieCount: 36
}

heroObj.movieCount = 40
console.log(heroObj)

// Object destructure
const { heroName } = heroObj
console.log(heroName);
