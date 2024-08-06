// Insert value at particular postion

// let arr = [1, 3, 5, 8];
// let value = 5;

// for (let i = arr.length - 1; i >= 0; i--) {
//   arr[i + 1] = arr[i];
//   if (arr[i] < value) {
//     arr[i + 1] = value;
//     break;
//   }
//   if (value < arr[0] && i === 0) {
//     arr[0] = value;
//     break;
//   }
// }

// console.log(arr);

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// let nums = [1, 3, 5];
// let target = 2;

// let searchInsert = function (nums, target) {
//   let a;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       a = i;
//       break;
//     }
//   }
//   if (a === undefined || target === 0) {
//     for (let i = nums.length - 1; i >= 0; i--) {
//       nums[i + 1] = nums[i];
//       if (nums[i] < target) {
//         nums[i + 1] = target;
//         a = i + 1;
//         break;
//       }

//       if (target < nums[0] && i === 0) {
//         nums[0] = target;
//         a = 0;
//         break;
//       }
//     }
//   }
//   return a;
// };

// let answer = searchInsert(nums, target);
// console.log(answer);

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// let digits = [9];
// let s = "";
// let arr2 = [];

// let plusOne = function (digits, s, arr2) {
//   for (let i = 0; i < digits.length; i++) {
//     s = s + digits[i];
//   }
//   let a = Number(s) + 1;
//   b = String(a);
//   for (j = 0; j < b.length; j++) {
//     arr2.push(Number(b[j]));
//   }
//   return arr2;
// };

// let ans = plusOne(digits, s, arr2);
// console.log(ans);

// let digits = [9, 9];
// let plusOne = function (digits) {
//   let arr2 = [];
//   let add = 1;
//   for (let i = digits.length - 1; i >= 0; i--) {
//     if (add > 0) {
//       let s = digits[i] + add;
//       if (s === 10) {
//         arr2.push(0);
//       } else {
//         arr2.push(s);
//         add = 0;
//       }
//     } else {
//       arr2.push(digits[i]);
//     }
//     if (add > 0 && i === 0) {
//       arr2.push(add);
//     }
//   }
//   return arr2.reverse();
// };

// let ans = plusOne(digits);
// console.log(ans);

// let nums1 = [1, 2, 3, 0, 0];
// let nums2 = [2, 5, 6];
// m = 3;
// n = 3;

// var merge = function (nums1, m, nums2, n) {
//   const arr = [];
//   for (let i = 0; i < nums1.length; i++) {
//     if (nums1[i] === 0) {
//       continue;
//     } else {
//       arr.push(nums1[i]);
//     }
//   }
//   for (let j = 0; j < nums2.length; j++) {
//     if (nums2[j] === 0) {
//       continue;
//     } else {
//       arr.push(nums2[j]);
//     }
//   }
//   let s;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < i + 1; j++) {
//       if (arr[i] < arr[j]) {
//         s = arr[i];
//         arr[i] = arr[j];
//         arr[j] = s;
//       }
//     }
//   }
//   return arr;
// };

// let ans = merge(nums1, m, nums2, n);
// // console.log(ans);

// const a = [1, 3, 0, 1, 2, 0, 0, 0, 0, 1, 9];
// let l = a.length;
// for (let i = 0; i < l; i++) {
//   if (a[i] === 0) {
//     for (let j = i; j < l; j++) {
//       a[j] = a[j + 1];
//     }
//     l = l - 1;
//     if (a[i] == 0) {
//       i = i - 1;
//     }
//   }
//   a.length = l;
// }

// console.log(a);

// let nums1 = [1, 2, 3, 0, 0];
// let nums2 = [2, 5, 6];
// let nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
// let nums2 = [1, 2, 2];
// m = 3;
// n = 3;

// var merge = function (nums1, m, nums2, n) {
//   for (let i = 0; i < nums2.length; i++) {
//     nums1.push(nums2[i]);
//   }

//   let l = nums1.length;
//   for (let i = 0; i < l; i++) {
//     if (nums1[i] <= 0) {
//       for (let j = i; j < l; j++) {
//         nums1[j] = nums1[j + 1];
//       }
//       l = l - 1;
//       if (nums1[i] <= 0) {
//         i = i - 1;
//       }
//     }
//     nums1.length = l;
//   }

//   for (let i = 0; i < nums1.length; i++) {
//     for (let j = 0; j < i + 1; j++) {
//       if (nums1[i] < nums1[j]) {
//         s = nums1[i];
//         nums1[i] = nums1[j];
//         nums1[j] = s;
//       }
//     }
//   }

//   return nums1;
// };

// const ans = merge(nums1, m, nums2, n);
// console.log(ans);

// let nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
// let nums2 = [1, 2, 2];
// let m = 6;
// let n = 3;

// let merge = function (nums1, m, nums2, n) {
//   let count = 0;
//   for (let i = m; i < m + n; i++) {
//     nums1[i] = nums2[count];
//     count = count + 1;
//   }
//   for (let i = 0; i < nums1.length; i++) {
//     for (let j = i + 1; j < nums1.length; j++) {
//       if (nums1[i] > nums1[j]) {
//         let s = nums1[i];
//         nums1[i] = nums1[j];
//         nums1[j] = s;
//       }
//     }
//   }
//   return nums1;
// };

// let ans = merge(nums1, m, nums2, n);
// console.log(ans);

// let arr = ["abc123", "abc", "pawan", "pawansin2", "suraj"];
// for (let i = 0; i < arr.length; i++) {
//   let na = arr[i];
//   let s = "";
//   for (let j = na.length - 1; j >= 0; j--) {
//     // console.log(na[j], typeof na[j], Number(na[j]), isNaN(na[j]));
//     if (isNaN(na[j])) {
//       s += na[j];
//     } else {
//       s = "";
//       break;
//     }
//   }
//   if (s !== "") {
//     arr[i] = s;
//   }
// }
// console.log(arr);

// let a = "pawan singh nagarkoti";
// let s = "";
// for (let i = a.length - 1; i >= 0; i--) {
//   s += a[i];
// }

// console.log(s);

// const s = "abcABdshG";
// s = "Y";
// if (s === s.toUpperCase()) {
//   console.log("yes");
// } else {
//   console.log("no");
// }
// const us = (str) => str === str.toUpperCase();
// console.log(us("A"));
// let st = "";
// for (let i = 0; i < s.length; i++) {
//   if (s[i] === s[i].toUpperCase()) {
//     st += s[i].toLowerCase();
//   } else {
//     st += s[i].toUpperCase();
//   }
// }

// console.log(st);

// let a = [4, 1];
// let arr = [
//   {
//     id: 1,
//     lable: "one",
//   },
//   {
//     id: 2,
//     lable: "one",
//   },
//   {
//     id: 3,
//     lable: "one",
//   },
//   {
//     id: 4,
//     lable: "one",
//   },
// ];
// let c = [];

// for (let i = 0; i < a.length; i++) {
//   arr.filter((value) => {
//     if (value.id === a[i]) {
//       c.push(value);
//     }
//   });
// }
// for (let j = 0; j < arr.length; j++) {
//   console.log(a[j]);
//   if (a[i] === arr[i].id) {
//     c.push(arr[i]);
//   }
// }
// }

// console.log(c);

let a = [1, 2, 3, 1, 1, 3];

let fun = (a) => {
  let value;

  for (let i = 0; i < a.length; i++) {
    if (value !== null && value !== 0) break;
    value = a[i];
    for (let j = 0; j < a.length; j++) {
      if (a[i] == a[j]) {
        value = null;
        break;
      }
    }
  }
  return value;
};

const ans = fun(a);
console.log(ans);
