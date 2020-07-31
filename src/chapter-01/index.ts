import { echo } from "./echo";

console.log("hello world");
echo("Id laborum ad cupidatat velit cupidatat exercitation.");

// 3 + []
// //to types '3'
// let obj = {}
// obj.foo // Evaluates to undefined
// function a(b) {
// return b/2
// }
// a("z") // Evaluates to NaN

// let a = 1 + 2;
// let b = a + 3;
// //let c = {
//   apple: a,
//   banana: b,
// };
// //

function squareOf(n: number) {
  return n * n;
}
console.log(squareOf(2));
//squareOf("z");

// let a = true
// var b = false
// const c = true

// let d: boolean = true
// let e: true = true
// let f: true = false

function log(message: string, userId?: string) {
  let time = new Date().toLocaleTimeString();
  console.log(time, message, userId || "Not signed in");
}
log("Page loaded"); // Logs "12:38:31 PM Page loaded Not signed in"
log("User signed in", "da763be"); // Logs "12:38:31 PM User signed in da763be"

function log1(message1: string, userId1 = "Not signed in") {
  let time = new Date().toISOString();
  console.log(time, message1, userId1);
}
log("User signed in", "da763be");
log1("user sign out");
