// spread operator
const heroArr1: string[] = ['Khan', 'Shan', 'kay'];
const heroArr2: string[] = ['Alms', 'Kris', 'Alpha'];

// Array destructure
const [hero1, hero2, xyz] = heroArr1
//     Khan   Shan   kay
console.log(hero1, hero2, xyz, 'Array destructure'); // Khan Shan kay

// heroArr1.push('Alms'); // 'Alms', 'Kris', 'Alpha'
console.log(...heroArr2); // Alms Kris Alpha
console.log(heroArr1);  // [ 'Khan', 'Shan', 'kay' ]
heroArr1.push(...heroArr2);
console.log(heroArr1);  // [ 'Khan', 'Shan', 'kay', 'Alms', 'Kris', 'Alpha' ]


// rest parameter
const heroScore = (score: number, score1: number, score2: number): number => {
  return score + score1 + score2
}
console.log(heroScore(1, 4, 6));

// With rest parameters
const heroScoreRest = (...score: number[]): number => {
  let sum: number = 0;
  score.map(num => sum += num)
  return sum
}
console.log(heroScoreRest(1, 4, 6, 3));

const heroStringRest = (...strings: string[]): string => {
  let fullWords: string = '';
  strings.map(string => fullWords += string)
  return fullWords;
}
// কোন কিছু রিটার্ণ না করলে return এ void লিখবো
console.log(heroStringRest('Prog', 'ramming', ' ', 'Hero' + ' ' + 'Apollo'))