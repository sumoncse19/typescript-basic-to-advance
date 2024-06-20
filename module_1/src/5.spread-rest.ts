{
  // spread operator
  const heroArr1: string[] = ["Khan", "Shan", "kay"];
  const heroArr2: string[] = ["Alms", "Kris", "Alpha"];

  // Array destructure
  const [hero1, hero2, xyz] = heroArr1;
  //     Khan   Shan   kay
  console.log(hero1, hero2, xyz, "Array destructure"); // Khan Shan kay

  // heroArr1.push('Alms'); // 'Alms', 'Kris', 'Alpha'
  console.log(...heroArr2); // Alms Kris Alpha
  console.log(heroArr1); // [ 'Khan', 'Shan', 'kay' ]
  heroArr1.push(...heroArr2); // push with array operator
  console.log(heroArr1); // [ 'Khan', 'Shan', 'kay', 'Alms', 'Kris', 'Alpha' ]

  // rest parameter
  const heroScore = (score: number, score1: number, score2: number): number => {
    return score + score1 + score2;
  };
  console.log(heroScore(1, 4, 6));

  // With rest parameters
  const heroScoreRest = (...score: number[]): number => {
    let sum: number = 0;
    score.map((num) => (sum += num));
    return sum;
  };
  console.log(heroScoreRest(1, 4, 6, 3));

  const heroStringRest = (...strings: string[]): string => {
    let fullWords: string = "";
    strings.map((string) => (fullWords += string));
    return fullWords;
  };
  // কোন কিছু রিটার্ণ না করলে return এ void লিখবো
  console.log(heroStringRest("Prog", "ramming", " ", "Hero" + " " + "Apollo"));

  // New code;
  // Learn spread operator
  const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };
  const mentors2 = {
    prisma: "Firoz",
    next: "Tanmoy",
    cloud: "Nahid",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  // Learn rest operator
  const greetFriends = (...friends: string[]) => {
    // console.log(`Hi ${friend1} ${friend2} ${friend3}`)
    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };

  greetFriends("Abul", "kabul", "babul");

  // Learn destructuring
  // Object destructuring
  const user = {
    id: 823,
    name: {
      firstName: "Md. ",
      middleName: "Sumon",
      lastName: "Meah",
    },
    contactNo: "01533785541",
    address: "Uganda",
  };

  const {
    contactNo,
    name: { firstName, middleName: midName },
  } = user;

  // Array destructuring
  const myFriends = ["Rabbul", "Anik", "Sumon", "Sajid", "Cango", "Imtiaz"];
  const [friend1, friend2, , mangoFriend, ...friends] = myFriends;

  console.log(friend1, friend2, mangoFriend, friends); // Rabbul Anik Sajid [ 'Cango', 'Imtiaz' ]
}
