// let obj1 = {
//   name: "Hello",
//   text: "Pyton",
// };
// let obj2 = {
//   name: "Hiiii",
//   text: "Java",
// };
// let obj3 = {
//   name: "Visual Studio",
//   text: "PHP",
// };
// let obj4 = {
//   name: "Telefon",
//   text: "contr",
// };
// let obj5 = {
//   name: "Mac",
//   text: "Larawel",
// };
// let obj6 = {
//   name: "Dell",
//   text: "Hp",
// };
// let obj7 = {
//   name: "Iphone",
//   text: "samsung",
// };

// let groupsDiv = document.querySelector(".groups");

// let arr = [obj1, obj2, obj3, obj4, obj5, obj6, obj7];
// groupsDiv.innerHTML = "";
// arr.forEach(function (val, key) {
//   let item = `<div class="group">
//   <h2 class="group__name group__name--1">${val.name}</h2>
//   <p class="group__text group__text--1">${val.text}</p>
// </div>`;
//   groupsDiv.insertAdjacentHTML("afterbegin", item);
// });

// let newArr = [1, 2, 3, 4, 5, 6, 7];
// let opshi = newArr
//   .filter((val) => val > 2)
//   .map((val) => val * 5)
//   .reduce((sum, val) => {
//     return sum + val;
//   }, 0);
// console.log(opshi);

// let bor = newArr.some((val) => val > 7);
// console.log(bor);
// let yoq = newArr.every((val) => val > 0);
// console.log(yoq);

// let arrIn = [[4, 5], -6, [7, 2, [-7], [12], [[[[[[[[[[15], [20]]]]]]]]]]], 12];
// let y = arrIn.flat(Infinity);
// console.log(y);
// let arr0 = [[12, 4], 23, -9, [5]];
// let arr1 = [[[23], 43, -6, 0], 12];
// let arrs = [arrIn, arr0, arr1];
// let med = arrs.map(function (val) {
//   return val.flat(Infinity);
// });
// console.log(med);

// let x = arrs.flatMap(function (val) {
//   return val;
// });
// console.log(x);

// let letters = ["s", "a", "c", "x", "z"];
// console.log(letters.sort());
let s = "MaGjhkjhkjhkjhkjgggggggiiiinbmbmnbcSSSSooft";
let magic = "magicsoft";
let str = s.toLowerCase();
console.log(str);
let arr = [];
let index = -1;
for (let i = 0; i < magic.length; i++) {
  for (let j = 0; j < str.length; j++) {
    if (magic[i] == str[j]) {
      if (index < j) {
        arr.push(str[j]);
        index = j;
        break;
      }
    }
  }
}
if (arr.length == 9) {
  console.log("topdim");
} else {
  console.log("topolmadim");
}
console.log(arr);
