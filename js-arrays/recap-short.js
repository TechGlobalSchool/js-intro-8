// Array methods recap

const fruits = ["Apple", "Banana", "Cherry", "Kiwi"];
// 0, 1, 2[?]

// find index of Cherry
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "Cherry") {
    console.log(i); // index of cherry
  }
}

// indexOf
let index = fruits.indexOf("Cherry");
console.log(index);

const fruits2 = ["Apple", "Banana", "Cherry", "Kiwi", "Cherry"];

// find last index of Cherry
let lindex = fruits2.lastIndexOf("Cherry");
console.log(lindex);

// How would you create your own sort method?
console.log(fruits2.sort()); // ? Alphabetical order

// map - returns an new array
const nums = [1, 2, 3]; // => double this array => [2,4,6]

let doubleNums = [];
for (let i = 0; i < nums.length; i++) {
  doubleNums.push(nums[i] * 2);
}
console.log(doubleNums);

const doubleTheNum = (num) => num * 2; // use before initialization
const dblNums = nums.map(doubleTheNum);

// function doubleTheNum(num) { // OK to use before initialization
//   return num * 2;
// }
console.log(dblNums);

// filter -> returns new array

let filteredNums = [];
const nums2 = [1, 2, 3];
for (let i = 0; i < nums2.length; i++) {
  if (nums2[i] > 1) {
    filteredNums.push(nums2[i]);
  }
}
console.log(filteredNums);

const filteredNums2 = nums2.filter((num) => num > 1);
console.log(filteredNums2);

// reduce ->
const num3 = [1, 2, 3]; // sum of elements => 6

let sum = 0;
num3.forEach((num) => (sum += num));
console.log(sum); // 6

const sum2 = num3.reduce((acc, num) => {
  return acc + num; // num3[0] = num = 1
  //   return acc + num // 1 + 2
  //   return acc + num // 3 + 3 => 6
});

const sum3 = num3.reduce((acc, num) => {
  return acc + num; // 0 + 1
  //   return acc + num; // 1 + 2
  //   return acc + num; // 3 + 3 => 6
}, 0);
console.log(sum2); // 6

["A", "B"].reduce({}, "");

// Array of Objects

const product = {
  title: "Gifts for adventurers",
  image: {
    altText: "Gifts for adventurers",
    url: "https://images-na.ssl-images-amazon.com/images/G/01/sports/HolidayGG_HP/November/Cat_cards/CampHike_NOV_DT_1x._SY304_CB576711483_.jpg",
  },
  link: {
    text: "Explore sports and outdoor giftsExplore sports and outdoor gifts",
    url: "https://www.amazon.com/gcx/Sports-&-Outdoor-Gifts/gfhz/events/?_encoding=UTF8&canBeEGifted=false&canBeGiftWrapped=false&categoryId=HOL-Cat-Sports&getItByTomorrow=false&isLimitedTimeOffer=false&isPrime=false&subcategoryIds=HOL-Cat-Sports%3Aoutdoor-recreating&pd_rd_w=5Ciw4&content-id=amzn1.sym.40fda6f8-871f-4969-8690-40bce785f09a&pf_rd_p=40fda6f8-871f-4969-8690-40bce785f09a&pf_rd_r=TQ08SERPNMGF1J48JXKE&pd_rd_wg=kgHlm&pd_rd_r=aab826d5-b53f-4cbc-88f1-6f705f2c9776&ref_=pd_gw_unk",
  },
};

const gifts = [product, product, product, product, product, product, product];

gifts.forEach()
gifts.map()
gifts.filter()
gifts.reduce()
gifts.indexOf()
gifts.some()
gifts.every()