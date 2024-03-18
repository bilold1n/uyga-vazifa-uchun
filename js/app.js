//1
// let arr = "l*2";
// function arr1(arr1) {
//   let newarr = arr1.split("*");
//   let resalt = "";
//   for (let i = 0; i < +newarr[1]; i++) {
//     resalt += `<${arr1[0]}></${arr1[0]}>$>`;
//   }
//   console.log(resalt);
// }
// arr1(arr);
//2
// let arr = 55;
// function arr1(arr1) {
//   let arr7 = [];
//   let newarr1 = 0;
//   for (let i = 1; i < arr1; i++) {
//     arr7.push(`${i}+`);
//     newarr1 = newarr1 + i;
//     if (newarr1 == arr) {
//       console.log(arr7.join("") + `=${arr}`);
//       break;
//     }
//   }
// }
// arr1(arr);
//3
// let min = 8;
// let max = 16;
// let son = 10;
// function hisob(son1a) {
//   if (son1a >= min && son1a <= max) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// hisob(son);
//4
// let arr = 1;
// function arr1(arr1) {
//   let resalt = 0;
//   resalt = arr1 * arr1;
//   if (resalt % 10 == arr1) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// arr1(arr);
//5
// let min = [5, 4, 3, 2, 1];
// function hisob(son) {
//   let max = [];
//   for (let i = 0; i < min.length; i++) {
//     max.push(min[i] + i);
//   }
//   console.log(max);
// }
// hisob(min);
//6
// let min = ["fanta", "cola", "water", "limonade"];
// function hisob(son) {
//   let max = [];
//   for (let i = 0; i < min.length; i++) {
//     if (min[i] == "fanta" || min[i] == "cola") {
//     } else {
//       max.push(min[i]);
//     }
//   }
//   console.log(max);
// }
// hisob(min);
//7
// let min = "8988";
// function hisob(son) {
//   let resalt = 0;
//   for (let i = 0; i < son.length; i++) {
//     resalt++;
//   }
//   console.log(resalt);
// }
// hisob(min); domla batta sondi string bn oldim shunki bo'lmasa chiqmayapti bu ish to'gri ekan
//8
// let min = 001;
// function hisob(son) {
//   let resalt = [];
//   resalt.push(Math.floor(son % 10));
//   resalt.push(Math.floor(son / 10) % 10);
//   resalt.push(Math.floor(son / 100));
//   console.log(resalt.join(""));
// }
// hisob(min); domla bu faqat uch xonali sonlar uchun masalada ham shunaqa edi.
//9
// let son1 = 5;
// let son2 = 7;
// function random() {
//   let resalt = Math.floor(Math.random() * (son2 + 1));
//   if (resalt >= son1 && resalt <= son2) {
//     console.log(resalt);
//   } else {
//     console.log(resalt + "-bu son son1 va son2 oralig'ida emas");
//     console.log("sahifani yangilasangiz chiqadi");
//   }
// }
// random();
//10
// let min = 370;
// function hisob(son) {
//   let bir = 0;
//   let ikki = 0;
//   let uch = 0;
//   uch = Math.floor(son % 10);
//   ikki = Math.floor(son / 10) % 10;
//   bir = Math.floor(son / 100);
//   if (bir ** uch + ikki ** uch + uch ** uch == son) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// hisob(min);domla bu faqat uch xonali sonlar uchun masalada ham shunaqa edi. keyin hammasi Narissistik sonlarda ishled faqat 370 da emas chinki boshqa sonni 0ga ko'paytirsa no'l bo'pketad.
//11
// let min = "fvLzpxmgXSDrobbgMVrc";
// function hisob(son) {
//   let resalt = 0;
//   for (let i = 0; i < son.length; i++) {
//     if (son[i] == son[i].toUpperCase()) {
//       resalt = resalt + 1;
//     }
//   }
//   console.log(resalt);
// }
// hisob(min);
