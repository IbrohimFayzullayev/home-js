let obj1 = {
  name: "Hello",
  text: "Pyton",
};
let obj2 = {
  name: "Hiiii",
  text: "Java",
};
let obj3 = {
  name: "Nima",
  text: "PHP",
};
let obj4 = {
  name: "Telefon",
  text: "contr",
};
let obj5 = {
  name: "Mac",
  text: "Larawel",
};
let obj6 = {
  name: "Dell",
  text: "Hp",
};
let obj7 = {
  name: "Iphone",
  text: "samsung",
};

let groupsDiv = document.querySelector(".groups");

let arr = [obj1, obj2, obj3, obj4, obj5, obj6, obj7];
groupsDiv.innerHTML = "";
arr.forEach(function (val, key) {
  let item = `<div class="group">
  <h2 class="group__name group__name--1">${val.name}</h2>
  <p class="group__text group__text--1">${val.text}</p>
</div>`;
  groupsDiv.insertAdjacentHTML("afterbegin", item);
});

let newArr = [1, 2, 3, 4, 5, 6, 7];
let opshi = newArr
  .filter((val) => val > 2)
  .map((val) => val * 5)
  .reduce((sum, val) => {
    return sum + val;
  }, 0);
console.log(opshi);
