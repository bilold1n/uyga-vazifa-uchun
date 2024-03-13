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
let obj = {
  ism: 20,
  yosh: 80,
  adres: "yer sayyorasi",
};
function isempty(obj) {
  let resalt = Object.values(obj);
  let ushlab = 0;
  for (let i = 0; i < resalt.length; i++) {
    if (resalt[i] == String(resalt[i])) {
    } else {
    }
  }
  // console.log(ushlab);
}
isempty(obj);
