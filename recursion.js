/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) {
    return 1;
  } else {
    return nums[0] * product(nums.slice(1));
  }
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 1) {
    return words[0].length;
  } else {
    const length1 = words[0].length;
    const length2 = longest(words.slice(1));
    return length1 > length2 ? length1 : length2;
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) {
    return '';
  } else {
    return str[0] + everyOther(str.slice(2));
  }
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  } else {
    return str[0] === str[str.length - 1] && isPalindrome(str.slice(1, -1));
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if (arr.length === 0) {
    return -1;
  } else if (arr[0] === val) {
    return 0;
  } else {
    const index = findIndex(arr.slice(1), val);
    return index === -1 ? -1 : index + 1;
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str === '') {
    return '';
  } else {
    return revString(str.slice(1)) + str[0];
  }
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let arr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      arr.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      arr = arr.concat(gatherStrings(obj[key]));
    }
  }
  return arr;
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] > val) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  
  return -1;
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
