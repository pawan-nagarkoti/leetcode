// // Insert value at particular postion

// // let arr = [1, 3, 5, 8];
// // let value = 5;

// // for (let i = arr.length - 1; i >= 0; i--) {
// //   arr[i + 1] = arr[i];
// //   if (arr[i] < value) {
// //     arr[i + 1] = value;
// //     break;
// //   }
// //   if (value < arr[0] && i === 0) {
// //     arr[0] = value;
// //     break;
// //   }
// // }

// // console.log(arr);

// // ------------------------------------------------------------------------
// // ------------------------------------------------------------------------
// // ------------------------------------------------------------------------
// // ------------------------------------------------------------------------

// // Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// // let nums = [1, 3, 5];
// // let target = 2;

// // let searchInsert = function (nums, target) {
// //   let a;
// //   for (let i = 0; i < nums.length; i++) {
// //     if (nums[i] === target) {
// //       a = i;
// //       break;
// //     }
// //   }
// //   if (a === undefined || target === 0) {
// //     for (let i = nums.length - 1; i >= 0; i--) {
// //       nums[i + 1] = nums[i];
// //       if (nums[i] < target) {
// //         nums[i + 1] = target;
// //         a = i + 1;
// //         break;
// //       }

// //       if (target < nums[0] && i === 0) {
// //         nums[0] = target;
// //         a = 0;
// //         break;
// //       }
// //     }
// //   }
// //   return a;
// // };

// // let answer = searchInsert(nums, target);
// // console.log(answer);

// // ------------------------------------------------------------------------
// // ------------------------------------------------------------------------
// // ------------------------------------------------------------------------
// // ------------------------------------------------------------------------

// // let digits = [9];
// // let s = "";
// // let arr2 = [];

// // let plusOne = function (digits, s, arr2) {
// //   for (let i = 0; i < digits.length; i++) {
// //     s = s + digits[i];
// //   }
// //   let a = Number(s) + 1;
// //   b = String(a);
// //   for (j = 0; j < b.length; j++) {
// //     arr2.push(Number(b[j]));
// //   }
// //   return arr2;
// // };

// // let ans = plusOne(digits, s, arr2);
// // console.log(ans);

// // let digits = [9, 9];
// // let plusOne = function (digits) {
// //   let arr2 = [];
// //   let add = 1;
// //   for (let i = digits.length - 1; i >= 0; i--) {
// //     if (add > 0) {
// //       let s = digits[i] + add;
// //       if (s === 10) {
// //         arr2.push(0);
// //       } else {
// //         arr2.push(s);
// //         add = 0;
// //       }
// //     } else {
// //       arr2.push(digits[i]);
// //     }
// //     if (add > 0 && i === 0) {
// //       arr2.push(add);
// //     }
// //   }
// //   return arr2.reverse();
// // };

// // let ans = plusOne(digits);
// // console.log(ans);

// // let nums1 = [1, 2, 3, 0, 0];
// // let nums2 = [2, 5, 6];
// // m = 3;
// // n = 3;

// // var merge = function (nums1, m, nums2, n) {
// //   const arr = [];
// //   for (let i = 0; i < nums1.length; i++) {
// //     if (nums1[i] === 0) {
// //       continue;
// //     } else {
// //       arr.push(nums1[i]);
// //     }
// //   }
// //   for (let j = 0; j < nums2.length; j++) {
// //     if (nums2[j] === 0) {
// //       continue;
// //     } else {
// //       arr.push(nums2[j]);
// //     }
// //   }
// //   let s;
// //   for (let i = 0; i < arr.length; i++) {
// //     for (let j = 0; j < i + 1; j++) {
// //       if (arr[i] < arr[j]) {
// //         s = arr[i];
// //         arr[i] = arr[j];
// //         arr[j] = s;
// //       }
// //     }
// //   }
// //   return arr;
// // };

// // let ans = merge(nums1, m, nums2, n);
// // // console.log(ans);

// // const a = [1, 3, 0, 1, 2, 0, 0, 0, 0, 1, 9];
// // let l = a.length;
// // for (let i = 0; i < l; i++) {
// //   if (a[i] === 0) {
// //     for (let j = i; j < l; j++) {
// //       a[j] = a[j + 1];
// //     }
// //     l = l - 1;
// //     if (a[i] == 0) {
// //       i = i - 1;
// //     }
// //   }
// //   a.length = l;
// // }

// // console.log(a);

// // let nums1 = [1, 2, 3, 0, 0];
// // let nums2 = [2, 5, 6];
// // let nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
// // let nums2 = [1, 2, 2];
// // m = 3;
// // n = 3;

// // var merge = function (nums1, m, nums2, n) {
// //   for (let i = 0; i < nums2.length; i++) {
// //     nums1.push(nums2[i]);
// //   }

// //   let l = nums1.length;
// //   for (let i = 0; i < l; i++) {
// //     if (nums1[i] <= 0) {
// //       for (let j = i; j < l; j++) {
// //         nums1[j] = nums1[j + 1];
// //       }
// //       l = l - 1;
// //       if (nums1[i] <= 0) {
// //         i = i - 1;
// //       }
// //     }
// //     nums1.length = l;
// //   }

// //   for (let i = 0; i < nums1.length; i++) {
// //     for (let j = 0; j < i + 1; j++) {
// //       if (nums1[i] < nums1[j]) {
// //         s = nums1[i];
// //         nums1[i] = nums1[j];
// //         nums1[j] = s;
// //       }
// //     }
// //   }

// //   return nums1;
// // };

// // const ans = merge(nums1, m, nums2, n);
// // console.log(ans);

// // let nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
// // let nums2 = [1, 2, 2];
// // let m = 6;
// // let n = 3;

// // let merge = function (nums1, m, nums2, n) {
// //   let count = 0;
// //   for (let i = m; i < m + n; i++) {
// //     nums1[i] = nums2[count];
// //     count = count + 1;
// //   }
// //   for (let i = 0; i < nums1.length; i++) {
// //     for (let j = i + 1; j < nums1.length; j++) {
// //       if (nums1[i] > nums1[j]) {
// //         let s = nums1[i];
// //         nums1[i] = nums1[j];
// //         nums1[j] = s;
// //       }
// //     }
// //   }
// //   return nums1;
// // };

// // let ans = merge(nums1, m, nums2, n);
// // console.log(ans);

// // let arr = ["abc123", "abc", "pawan", "pawansin2", "suraj"];
// // for (let i = 0; i < arr.length; i++) {
// //   let na = arr[i];
// //   let s = "";
// //   for (let j = na.length - 1; j >= 0; j--) {
// //     // console.log(na[j], typeof na[j], Number(na[j]), isNaN(na[j]));
// //     if (isNaN(na[j])) {
// //       s += na[j];
// //     } else {
// //       s = "";
// //       break;
// //     }
// //   }
// //   if (s !== "") {
// //     arr[i] = s;
// //   }
// // }
// // console.log(arr);

// // let a = "pawan singh nagarkoti";
// // let s = "";
// // for (let i = a.length - 1; i >= 0; i--) {
// //   s += a[i];
// // }

// // console.log(s);

// // const s = "abcABdshG";
// // s = "Y";
// // if (s === s.toUpperCase()) {
// //   console.log("yes");
// // } else {
// //   console.log("no");
// // }
// // const us = (str) => str === str.toUpperCase();
// // console.log(us("A"));
// // let st = "";
// // for (let i = 0; i < s.length; i++) {
// //   if (s[i] === s[i].toUpperCase()) {
// //     st += s[i].toLowerCase();
// //   } else {
// //     st += s[i].toUpperCase();
// //   }
// // }

// // console.log(st);

// // let a = [4, 1];
// // let arr = [
// //   {
// //     id: 1,
// //     lable: "one",
// //   },
// //   {
// //     id: 2,
// //     lable: "one",
// //   },
// //   {
// //     id: 3,
// //     lable: "one",
// //   },
// //   {
// //     id: 4,
// //     lable: "one",
// //   },
// // ];
// // let c = [];

// // for (let i = 0; i < a.length; i++) {
// //   arr.filter((value) => {
// //     if (value.id === a[i]) {
// //       c.push(value);
// //     }
// //   });
// // }
// // for (let j = 0; j < arr.length; j++) {
// //   console.log(a[j]);
// //   if (a[i] === arr[i].id) {
// //     c.push(arr[i]);
// //   }
// // }
// // }

// // console.log(c);

// // let a = [1, 2, 3, 1, 1, 3];

// // let fun = (a) => {
// //   let value;

// //   for (let i = 0; i < a.length; i++) {
// //     if (value !== null && value !== 0) break;
// //     value = a[i];
// //     for (let j = 0; j < a.length; j++) {
// //       if (a[i] == a[j]) {
// //         value = null;
// //         break;
// //       }
// //     }
// //   }
// //   return value;
// // };

// // const ans = fun(a);
// // console.log(ans);

// // console.log("start");
// // setTimeout(() => console.log("1000"), 1000);

// // setTimeout(() => console.log("time"), 0);
// // const p = Promise.resolve("Promise");
// // const sp = new Promise((resolve, reject) => {
// //   console.log("resolve");
// // });

// // console.log(p);
// // p.then((res) => console.log(res));
// // console.log("error");

// // const p1 = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     resolve("p1 Process");
// //   }, 100);
// // });
// // const p2 = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     resolve("p2 Process");
// //   }, 1000);
// // });
// // const p3 = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     resolve("p3 Process");
// //   }, 1000);
// // });

// // const r = Promise.any([p1, p2, p3])
// //   .then((r) => console.log(r))
// //   .catch((e) => console.log(e));

// // console.log(r);

// // console.log("start");
// // const p1 = new Promise((resolve, reject) => {
// //   console.log(1);
// //   reject(new Error("new Error"));
// //   console.log(2);
// // });
// // p1.then((r) => console.log(r)).then((r) => console.log(r));
// // console.log("stop");

// // const p1 = new Promise((resolve, reject) => {
// //   reject();
// // });

// // p1.then((r) => console.log("first"))
// //   .then((r) => console.log("second"))
// //   .then((r) => console.log("third"))
// //   .catch((e) => console.log("error"))
// //   .then((r) => console.log("hi"));
// // const [value, setValue] = useState(0);

// // export const useLocal = (name, value) => {
// //   let setValue = (updateValue)=> localStorage.setItem(name, updateValue);
// //   let getValue = localStorage.getItem(name) || value;
// //   return { setValue, getValue };
// // };

// // useLocal("token", abckck23);

// // import { useState } from "react";

// // const useLocalStorage = (key, defaultValue) => {
// //     // Create state variable to store
// //     // localStorage value in state
// //     const [localStorageValue, setLocalStorageValue] = useState(() => {
// //         try {
// //             const value = localStorage.getItem(key)
// //             // If value is already present in
// //             // localStorage then return it

// //             // Else set default value in
// //             // localStorage and then return it
// //             if (value) {
// //                 return JSON.parse(value)
// //             } else {
// //                 localStorage.setItem(key, JSON.stringify(defaultValue));
// //                 return defaultValue
// //             }
// //         } catch (error) {
// //             localStorage.setItem(key, JSON.stringify(defaultValue));
// //             return defaultValue
// //         }
// //     })

// //     // this method update our localStorage and our state
// //     const setLocalStorageStateValue = (valueOrFn) => {
// //         let newValue;
// //         if (typeof valueOrFn === 'function') {
// //             const fn = valueOrFn;
// //             newValue = fn(localStorageValue)
// //         }
// //         else {
// //             newValue = valueOrFn;
// //         }
// //         localStorage.setItem(key, JSON.stringify(newValue));
// //         setLocalStorageValue(newValue)
// //     }
// //     return [localStorageValue, setLocalStorageStateValue]
// // }

// // export default useLocalStorage;

// // useReducer, filter, map, forEach, every, reduce, flux
// // getter , setter

// // let p1 = Promise.resolve("Task1").then((r) => console.log(r));
// // let p2 = Promise.reject("Task2").then((r) => console.log(r));
// // let p3 = Promise.resolve("task3").then((r) => console.log(r));

// // let p1 = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     // console.log("Task1");
// //     resolve("Task1");
// //   }, 1000);
// // });

// // let p2 = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     resolve("task2");
// //     // console.log("Task2");
// //   }, 100);
// // });

// // Promise.any([p1, p2])
// //   .then((r) => console.log(r))
// //   .catch((e) => console.log(e));

// // var shortestCompletingWord = function (licensePlate, words) {
// //   let ca = [];
// //   for (let i = 0; i < licensePlate.length; i++) {
// //     ca.push(licensePlate[i].toLowerCase());
// //   }
// //   let copyCa = ca;
// //   let obj = [];
// //   for (let i = 0; i < words.length; i++) {
// //     let w = words[i];
// //     let cl = w[w.length - 1];
// //     let count = 0;
// //     let name = "";
// //     for (let j = 0; j < w.length; j++) {
// //       if (copyCa.includes(w[j])) {
// //         count = count + 1;
// //         name += w[j];

// //         if (cl === w[j]) {
// //           obj.push({
// //             length: count,
// //             name,
// //           });
// //           count = 0;
// //           name = "";
// //         }
// //       } else {
// //         // console.log("no");
// //       }
// //     }
// //     console.log(count, name);
// //   }
// //   return obj;
// // };
// // let licensePlate = "1s3 PSt";

// // let words = ["step", "steps", "stripe", "stepple"];
// // console.log(shortestCompletingWord(licensePlate, words));

// // let licensePlate = "1s3 PSt";
// // let words = ["step", "steps", "stripe", "stepple"];

// // var shortestCompletingWord = function (licensePlate, words) {
// //   let stringContainer = "";
// //   for (let i = 0; i < licensePlate.length; i++) {
// //     if (licensePlate[i].toLowerCase() !== licensePlate[i].toUpperCase()) {
// //       stringContainer += licensePlate[i].toLowerCase();
// //     }
// //   }

// //   const stringCountObject = {};
// //   for (let i = 0; i < words.length; i++) {
// //     if (i === 1) return stringCountObject;
// //     let singleWords = words[i];
// //     let modifiedString = ""; // To build the new modified string

// //     let countString = 0;
// //     for (let j = 0; j < stringContainer.length; j++) {
// //       if (singleWords.includes(stringContainer[j])) {
// //         for (let k = 0; k < singleWords.length; k++) {
// //           if (singleWords[k] === stringContainer[j]) {
// //             modifiedString += "*";
// //           } else {
// //             modifiedString += singleWords[k];
// //           }
// //         }
// //         console.log(stringContainer, singleWords);
// //         stringCountObject[words[i]] = countString += 1;
// //       }
// //     }
// //   }

// //   return stringCountObject;
// // };

// // console.log(shortestCompletingWord(licensePlate, words));

// // =========================================================================
// // prime Number
// // const checkPrimenumber = (number) => {
// //   for (let i = 2; i <= 9; i++) {
// //     if (number !== i && number % i === 0) {
// //       return false;
// //     }
// //   }
// //   return true;
// // };
// // let p = 1483;
// // console.log(checkPrimenumber(p));

// // =========================================================================
// // Reverse number

// // let n = -1230;
// // let rev = 0;
// // let sign = Math.sign(n);
// // n = Math.abs(n);

// // while (n > 0) {
// //   console.log(Math.abs(n));
// //   let ld = n % 10; // find last digit
// //   // console.log(ld);
// //   rev = rev * 10 + ld;
// //   n = Math.floor(n / 10); // remove last digit
// // }

// // console.log(sign * rev);

// // =========================================================================
// // Count digits in a number
// // let n = 234;
// // let count = 0;
// // // while (count <= n.toString().length - 1) {
// // //   count = count + 1;
// // // }

// // while (n > 0) {
// //   count += 1;
// //   n = Math.floor(n / 10);
// // }

// // console.log(count);

// // =========================================================================
// // Check if a number is Armstrong Number or not
// // let n = 123;
// // let n = 153;
// // let check = n;
// // let count = 0;
// // let ans;
// // while (n > 0) {
// //   let ld = n % 10;
// //   let cube = ld * ld * ld;
// //   count = count + cube;
// //   n = Math.floor(n / 10);

// //   if (n === 0 && check === count) {
// //     ans = true;
// //   } else {
// //     ans = false;
// //   }
// // }

// // console.log(ans);

// // =========================================================================
// // Print all Divisors of a given Number
// // let N = 12;
// // let output = [];
// // let count = 1;

// // while (count <= N) {
// //   let d = N % count;
// //   if (d === 0) {
// //     output.push(count);
// //   }
// //   count += 1;
// // }

// // console.log(output);

// // =========================================================================
// // Print Name N times using Recursion
// // function countName(n) {
// //   if (n < 1) return;
// //   console.log("pawan");
// //   n -= 1;
// //   countName(n);
// // }
// // let count = 5;
// // countName(count);

// // =========================================================================
// // Print 1 to N using recursion

// // function printNumber(num, n = 0) {
// //   if (n >= num) return;
// //   n += 1;
// //   console.log(n);
// //   printNumber(num, n);
// // }
// // let num = 5;
// // printNumber(num);
// // =========================================================================

// // Sum of first N Natural Numbers
// // let count = 0;
// // let n = 6;
// // for (let i = 0; i <= n; i++) {
// //   count += i;
// // }

// // console.log(count);

// // =========================================================================

// // 5*4*3*2*1 = 125
// // Factorial of a Number : Iterative and Recursive
// // function recursion(n, count = 1) {
// //   if (n <= 0) return count;

// //   count = count * n;
// //   recursion(n - 1, count);
// // }
// // let n = 5;
// // let ans = recursion(n);
// // console.log(ans);

// // =========================================================================
// // Reverse a given Array
// // let arr = [5, 4, 3, 2, 1];
// // let count = arr.length - 1;

// // for (let i = 0; i < arr.length; i++) {
// //   if (i === count) break;
// //   let temp = arr[i];
// //   arr[i] = arr[count];
// //   arr[count] = temp;
// //   count -= 1;
// // }
// // console.log(arr);

// // =========================================================================
// // Check if the given String is Palindrome or not
// // let str = "ABCDCBA";
// // let str = "TAKE U FORWARD";
// // let str = "A man, a plan, a canal: Panama";
// // let count = str.length - 1;
// // let check;
// // for (let i = 0; i < str.length; i++) {
// //   if (i === count) {
// //     check = true;
// //     break;
// //   }

// //   if (str[i] === str[count]) {
// //     check = true;
// //     count -= 1;
// //   } else {
// //     check = false;
// //     break;
// //   }
// // }

// // console.log(check);

// // function stringPalindrome(str) {
// //   let letter = [
// //     "a",
// //     "b",
// //     "c",
// //     "d",
// //     "e",
// //     "f",
// //     "g",
// //     "h",
// //     "i",
// //     "j",
// //     "k",
// //     "l",
// //     "m",
// //     "n",
// //     "o",
// //     "p",
// //     "q",
// //     "r",
// //     "s",
// //     "t",
// //     "u",
// //     "v",
// //     "w",
// //     "x",
// //     "y",
// //     "z",
// //     0,
// //     1,
// //     2,
// //     3,
// //     4,
// //     5,
// //     6,
// //     7,
// //     8,
// //     9,
// //   ];
// //   let newStr = "";
// //   for (let i = 0; i < str.length; i++) {
// //     if (letter.includes(str[i].toLowerCase())) {
// //       newStr += str[i].toLowerCase();
// //     }
// //   }

// //   if (newStr.length === 0) return true;
// //   let count = newStr.length - 1;
// //   let check;

// //   console.log(newStr);
// //   for (let i = 0; i < newStr.length; i++) {
// //     if (i === count) {
// //       check = true;
// //       break;
// //     }
// //     if (newStr[i] === newStr[count]) {
// //       check = true;
// //       count -= 1;
// //     } else {
// //       check = false;
// //       break;
// //     }
// //   }
// //   return check;
// // }
// // let str = "A man, a plan, a canal: Panama";

// // if (stringPalindrome(str)) {
// //   console.log("String is Palindrome");
// // } else {
// //   console.log("String is not Palindrome");
// // }

// // =========================================================================
// // Fibonacci series
// // let n = 5;
// // i = 0;
// // j = 1;
// // check = 0;
// // store = "";

// // while (n > check) {
// //   if (check === 0) {
// //     store += i;
// //     store += j;
// //   }
// //   check = i + j;
// //   i = j;
// //   j = check;
// //   store += check;
// // }

// // console.log(store);

// // let arr = [5, 2, 1, 0, 10];
// // for (let i = 0; i < arr.length; i++) {
// //   for (let j = i; j < arr.length; j++) {
// //     if (arr[i] > arr[j]) {
// //       let temp = arr[i];
// //       arr[i] = arr[j];
// //       arr[j] = temp;
// //     }
// //   }
// // }
// // console.log(arr);

// // bubble sort
// let arr = [4, 2, 5, 3, 1];
// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length - 1; i++) {
//   let isSwap = false;
//   for (let j = 0; j < arr.length - i - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//       isSwap = true;
//     }
//   }
//   if (!isSwap) break;
// }

// console.log(arr);

// selection sort
// const arr = [64, 25, 12, 22, 11];

// for (let i = 0; i < arr.length - 1; i++) {
//   let minIndex = i;
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[j] < arr[minIndex]) {
//       minIndex = j;
//     }
//   }
//   let temp = arr[i];
//   arr[i] = arr[minIndex];
//   arr[minIndex] = temp;
// }

// console.log(arr);

// bubble sort
// let arr = [64, 25, 12, 22, 11];
// const selectionSort = (arr) => {
//   let n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < n; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     let temp = arr[i];
//     arr[i] = arr[minIndex];
//     arr[minIndex] = temp;
//     console.log("s", arr);
//   }
//   return arr;
// };
// console.log(arr);
// console.log(selectionSort(arr));

// insertion sort
// function insertionSort(arr) {
//   let n = arr.length;
//   for (let i = 1; i < n; i++) {
//     let curr = arr[i];
//     let prev = i - 1;

//     while (prev >= 0 && arr[prev] > curr) {
//       arr[prev + 1] = arr[prev];
//       prev--;
//     }

//     arr[prev + 1] = curr;
//   }
//   return arr;
// }
// let arr = [64, 34, 25, 12, 22, 11, 90];
// let arr = [1, 3, 20, 10];
// console.log(insertionSort(arr));

// const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// let rd = [];

// for (let i = 0; i < arr.length; i++) {
//   if (!rd.includes(arr[i])) {
//     rd.push(arr[i]);
//   }
// }

// console.log(rd);

// var removeDuplicates = function (nums) {
//   let x = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > nums[x]) {
//       x = x + 1;
//       nums[x] = nums[i];
//     }
//   }
//   // nums.length = x + 1;
//   // return nums;
//   return x + 1;
// };

// var nums = [1, 1, 2, 4];
// console.log(removeDuplicates(nums));

// var removeElement = function (nums, val) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === val) {
//       let n = i;
//       while (n < nums.length) {
//         nums[n] = nums[n + 1];
//         n++;
//       }
//       i--;
//       nums.length = nums.length - 1;
//     }
//   }
//   return nums;
// };

// let nums = [0, 1, 2, 2, 3, 0, 4, 2, 2, 3];
// val = 2;
// console.log(removeElement(nums, val));

// var reverseString = function (s) {
//   let count = s.length - 1;
//   for (let i = 0; i < s.length; i++) {
//     if (count < i) return s;
//     let temp = s[i];
//     s[i] = s[count];
//     s[count] = temp;
//     count--;
//   }
// };
// // let s = ["H", "a", "n", "n", "a", "h"];
// let s = ["h", "e", "l", "l", "o"];
// console.log(reverseString(s));

// var maxProfit = function (prices) {
//   let minPrice = prices[0];
//   let index = 0;
//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < minPrice) {
//       minPrice = prices[i];
//       index = i;
//     }
//   }
//   if (index === prices.length - 1) return 0;
//   let max = 0;
//   for (let i = index + 1; i < prices.length; i++) {
//     if (prices[i] > max) {
//       max = prices[i];
//     }
//   }

//   let profit = max - minPrice;
//   return profit;
// };
// let prices = [7, 6, 4, 3, 1];
// let prices = [2, 4, 1];
// console.log(maxProfit(prices));

// var maxProfit = function (prices) {
//   let buyStock = prices[0];
//   let store = 0;

//   for (let i = 1; i < prices.length; i++) {
//     if (buyStock > prices[i]) {
//       buyStock = prices[i];
//     }

//     let maximum = prices[i] - buyStock;
//     if (store < maximum) {
//       store = maximum;
//     }
//   }

//   return store;
// };

// // let prices = [2, 4, 1];
// let prices = [7, 1, 5, 3, 6];

// console.log(maxProfit(prices));

// let num1 = [1, 2, 3, 0, 0, 0];
// let num2 = [2, 5, 6];

// let tl = num1.length + num2.length;
// let count = 0;
// for (let i = num1.length; i < tl; i++) {
//   num1.push(num2[count]);
//   count++;
// }

// for (let i = 0; i < num1.length; i++) {
//   for (let j = i; j < num1.length; j++) {
//     if (num1[i] > num1[j]) {
//       let temp = num1[i];
//       num1[i] = num1[j];
//       num1[j] = temp;
//     }
//   }
// }

// let x = 0;
// for (let i = 0; i < num1.length; i++) {
//   if (num1[i] !== 0) {
//     num1[x] = num1[i];
//     x = x + 1;
//   }
// }
// num1.length = x;
// console.log(num1);
// for (let i = 0; i < num1.length; i++) {
//   let minIndex = i;
//   for (let j = i + 1; j < num1.length; j++) {
//     if (num1[j] < num1[minIndex]) {
//       minIndex = j;
//     }
//   }
//   let temp = num1[i];
//   num1[i] = num1[minIndex];
//   num1[minIndex] = temp;
// }
// console.log(num1);

// var moveZeroes = function (nums) {
//   let x = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       let temp = nums[x];
//       nums[x] = nums[i];
//       nums[i] = temp;
//       x = x + 1;
//     }
//   }
//   return nums;
// };
// // let nums = [0, 1, 0, 3, 12];
// // let nums = [0];
// // let nums = [0, 0, 1];
// let nums = [1];
// console.log(nums);
// console.log(moveZeroes(nums));

// var findMaxConsecutiveOnes = function (nums) {
//   let c = 0;
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       count++;
//     } else {
//       if (c < count) {
//         c = count;
//       }
//       count = 0;
//     }

//     if (i === nums.length - 1 && c < count) {
//       c = count;
//     }
//   }

//   return c;
// };
// let nums = [1, 0, 1, 1, 0, 1];
// console.log(nums);
// console.log(findMaxConsecutiveOnes(nums));

// var missingNumber = function (nums) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = 0; j < nums.length - 1; j++) {
//       if (nums[j] > nums[j + 1]) {
//         let temp = nums[j];
//         nums[j] = nums[j + 1];
//         nums[j + 1] = temp;
//       }
//     }
//   }

//   for (let i = 0; i <= nums.length; i++) {
//     if (i !== nums[i]) {
//       return i;
//     }
//   }
// };

// var missingNumber = function (nums) {
//   for (let i = 0; i <= nums.length; i++) {
//     for (let j = 0; j <= nums.length; j++) {
//       if (i === nums[j]) {
//         break;
//       }
//       if (j === nums.length) {
//         return i;
//       }
//     }
//   }
// };

// let nums = [3, 0, 1];
// let nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
// let nums = [3, 0, 1, 2, 5];
// let nums = [0, 1];
// console.log(nums);
// console.log(missingNumber(nums));

// var singleNumber = function (nums) {
//   let obj = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (obj[nums[i]] === undefined) {
//       obj[nums[i]] = 1;
//     } else {
//       obj[nums[i]] += 1;
//     }
//   }

//   for (let a in obj) {
//     if (obj[a] < 2) {
//       return a;
//     }
//   }
// };

// var singleNumber = function (nums) {
//   let check = false;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         check = true;
//         nums[j] = "_";
//         break;
//       }
//     }
//     if (check) {
//       check = false;
//     } else {
//       return nums[i];
//     }
//   }
// };

// var singleNumber = function (nums) {
//   xor = 0;
//   for (let i = 0; i < nums.length; i++) {
//     xor = xor ^ nums[i];
//     console.log(xor);
//   }
//   return xor;
// };
// let nums = [3, 3, 1];
// let nums = [4, 1, 2, 1, 2];
// let nums = [3, 1, 5, 4, 1, 5, 3];
// let nums = [1];
// console.log(singleNumber(nums));

// function num(n) {
//   if (n === 0) return n;
//   return n + num(n - 1);
// }
// console.log(num(2));

// function sum(n) {
//   if (n === 0) return arr[n];
//   return arr[n] + sum(n - 1);
// }
// let arr = [5, 1];
// console.log(sum(arr.length - 1));
// function odd(n, od) {
//   if (arr[n] % 2 !== 0) {
//     od.push(arr[n]);
//   }
//   if (n == 0) {
//     let os = 0;
//     for (let i = 0; i < od.length; i++) {
//       os += od[i];
//     }
//     return os;
//   }

//   return odd(n - 1, od);
// }
// let arr = [5, 2, 0, 3, 6, 7];
// let arr = [5, 3, 2, 10, 1];
// let oddArr = [];
// console.log(odd(arr.length - 1, oddArr));

// let st = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 !== 0) {
//     st += arr[i];
//   }
// }
// console.log(st);

// function odd(n) {
//   let isOdd = arr[n] % 2 !== 0;
//   if (n == 0) {
//     return isOdd ? arr[n] : 0;
//   }

//   return (isOdd ? arr[n] : 0) + odd(n - 1);
// }

// let arr = [5, 3, 2, 10, 1];
// console.log(odd(arr.length - 1));

// function fac(n) {
//   if (n == 1) return n;
//   return n * fac(n - 1);
// }
// console.log(fac(3));

var isPowerOfTwo = function (n) {
  if (n == 1) return true;
  else if (n % 2 != 0 || n < 1) return false;
  return isPowerOfTwo(n / 2);
};
console.log(isPowerOfTwo(16));
