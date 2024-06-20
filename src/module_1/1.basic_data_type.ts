// Primitive Data Types
/* 
 - string
 - number
 - boolean
 - null
 - undefined
 - symbol
*/
// Implesive data type --> যখন নিজ থেকে ডাটা টাইপ ইনফার / এজিউম করতে পারবে।
// Explesive data type --> যখন আমরা টাইপ ডিফাইন করে দিবো।

let firstName = "Sumon"; // Implesive

const str: string = "Hello, worlds!"; // Explesive
const num: number = 16;
const isNum: boolean = true;

// undefined
let x: undefined = undefined;

// null
let y: null = null;

let d; // type define kore na dile oo nije nije any type dhore nibe jekono type er data assign korte parbo. Kintu eta uchit na.
let e: number; // age theke type define kore rakaha, ekhetre akta variable ee jekono data rakha jay na.

console.log(str, num, isNum);
