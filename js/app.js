//1
//   let newUser = new user((eni = 17), (balandlik = 18), (uzunligi = 58));
//   let resalt = balandlik * eni * uzunligi;
//   console.log(newUser);
//   return "hajmi:" + Number(resalt);
// }
// console.log(hajm());
//2
// let son = prompt("son1 ni kiriting:");
// let son1 = prompt("son2 ni kiriting:");
// let newarr = prompt("raqamlar kiriting");
// function bormi(params) {
//   let resalt = [];
//   newarr.split(",").forEach((element) => {
//     if (element > son && element < son1) {
//       resalt.push(element);
//     }
//   });
//   console.log(resalt);
// }
// bormi();
//3
// let son = prompt("so'z kiriting");
// let son1 = prompt("so'z kiriting");
// let resalt = [];
// function name1(soz1, soz2) {
//   if (soz1.length == soz2.length) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// name1(son, son1);
//4
// let son = prompt("son kiriting");
// let resalt = 0;
// function name2() {
//   for (let i = 0; i < son.length; i++) {
//     resalt += 1;
//   }
//   console.log("so'zlarnig length:" + resalt);
// }
// name2();
//5
// let son = prompt("sonlar kiriting");
// let resalt = [];
// function name3() {
//   son.split(",").forEach((element) => {
//     resalt.push(Number(element) + Number(element));
//   });
//   console.log(resalt);
// }
// name3();
//6
// let son = prompt("so'z kiriting");
// let resalt = 0;
// let resalt1 = 0;
// function name2() {
//   for (let i = 0; i < son.split(" ").length; i++) {
//     console.log(Number(son.split(" ")[i].length));
//   }
// }
// name2();
//7
// let newarr = prompt("sonlar kiriting");
// function kattami(params) {
//   let resalt = [];
//   newarr.split(",").forEach((element) => {
//     if (element > 5) {
//       resalt.push(element);
//     }
//   });
//   console.log(resalt);
// }
// kattami();
//8
// let newarr = prompt("sonlar kiriting");
// function yigindi() {
//   let ba = 0;
//   newarr.split(",").forEach((element) => {
//     ba = ba += Number(element);
//   });
//   return ba;
// }
// console.log("sonlar yigindisi:" + yigindi());
//9
// let newarr = prompt("sonlar kiriting");
// function hisob() {
//   let ba = 0;
//   newarr.split(",").forEach((element) => {
//     ba = ba + Number(element);
//   });
//   console.log(Math.abs(ba) + ":qadam bosish kerak");
// }
// hisob();
//10
// let newarr = prompt("sonkiriting");
// let newarr1 = prompt("sonkiriting");
// let resalt = Number(newarr) + Number(newarr1);
// function array() {
//   let ba = [];
//   for (i = 0; i < Number(newarr) + Number(newarr1); i++) {
//     if (i > newarr && i < newarr1) {
//       ba.push(i);
//     }
//   }
//   return ba;
// }
// console.log(array());
