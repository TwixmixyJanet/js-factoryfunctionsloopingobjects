// const createOutfit = function () {
//   const outfit = {
//     shirt: "green",
//     pants: "blue",
//     isNew: false,
//     showOff: function () {
//       this.isNew = true;
//       console.log(`Show-off your brand new outfit!`);
//     }
//   };
//   return outfit;
// };

const createOutfit = function (shirt, pants) {
  const outfit = {
    shirt: shirt,
    pants: pants,
    isNew: false,
    showOff: function () {
      this.isNew = true;
      console.log(`Show-off your brand new outfit!`);
    }
  };
  return outfit;
};

console.log(createOutfit());
// shirt: "green"
// pants: "blue"
// isNew: false
// showOff: ƒ showOff() {}

// const tuesday = createOutfit();
// console.log(tuesday);

// tuesday.shirt = "white";
// tuesday.pants = "black";
// console.log(tuesday);
// {shirt: "white", pants: "black", isNew: false, showOff: ƒ showOff()}

const tuesday = createOutfit("white", "black");
console.log(tuesday);

const wednesday = createOutfit("pink", "grey");
console.log(wednesday);

const thursday = createOutfit("green sweater", "green sweatpants");
console.log(thursday);

for (let key in tuesday) {
  console.log(key, tuesday[key]);
}

const outfitArray = [tuesday, wednesday, thursday];
for (let outfit of outfitArray) {
  console.log(outfit);
}

for (let outfit of outfitArray) {
  for (let key in outfit) {
    console.log(key, outfit[key]);
  }
}
