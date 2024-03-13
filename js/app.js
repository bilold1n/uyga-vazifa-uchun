//1
// let obj = {
//   ism: 20,
//   yosh: 80,
//   adres: "yer sayyorasi",
// };
// function isempty(obj) {
//   let resalt = Object.keys(obj);
//   if (resalt == 0) {
//     console.log(false);
//   } else {
//     console.log(true);
//   }
// }
// isempty(obj);
//2
// let obj = {
//   John: 100,
//   Ann: 160,
//   adres: 130,
// };
// function isempty(obj) {
//   let resalt = Object.values(obj);
//   let qiymat = 0;
//   for (let i = 0; i < resalt.length; i++) {
//     qiymat = qiymat + resalt[i];
//   }
//   console.log(qiymat);
// }
// isempty(obj);
//3
// let obj1 = {
//   ism: 20,
//   yosh: 80,
//   adres: "yer sayyorasi",
// };
// function isempty(obj) {
//   let resalt = Object.values(obj);
//   let ushlab = 0;
//   for (let i = 0; i < resalt.length; i++) {
//     if (typeof resalt[i] == "string") {
//     } else {
//       ushlab = ushlab + resalt[i];
//     }
//   }
//   console.log(ushlab);
// }
// isempty(obj1);
//4
// let arr = [1, 8, 9, 3, 6, 8, 7];
// function arr1(err1) {
//   let newarr = [];
//   err1.forEach((element) => {
//     newarr.unshift(element);
//   });
//   console.log(newarr);
// }
// arr1(arr);
//5
let arr = +prompt("raqam kiriting");
function hisob(newarr) {
  let arr2 = [];
  if (isNaN(arr) == true) {
    console.log(arr2);
  } else {
    arr2.push(arr2);
  }
}
hisob(arr);
