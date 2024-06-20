const heroObj: {
  company: "Programming Hero"; // Literal Type
  heroName: string;
  readonly age: number; // Readonly property
  profession: string;
  isMarried: boolean;
  isFamous?: boolean; // Optional Type
  movieCount: number;
} = {
  company: "Programming Hero", // We can't assign anything without Programming Hero because of LIteral Type (Fix Value)
  heroName: "Jhankar Mahbub",
  age: 32,
  profession: "Actor",
  isMarried: false,
  movieCount: 36,
};

heroObj.movieCount = 40;
console.log(heroObj);

// Object destructure
const { heroName } = heroObj;
console.log(heroName);
