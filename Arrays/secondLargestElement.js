// Basic solution
function secondLargestElementM1(arr) {
  // move ahead only if array length is more than 1, else return -1
  if (arr.length > 1) {
    // Sort the array in descending order
    arr.sort((a, b) => b - a);
    let currIndex = 1;
    // Iterate each element of the array from the element at index 1
    // Compare it with the element at (index - 1)
    // If the values are not same then return the array value at that index
    // Else increment the index and repeat the same stepsx
    // If the index exeeds array length return -1
    while (currIndex < arr.length) {
      if (arr[currIndex] != arr[currIndex - 1]) {
        return arr[currIndex];
      }
      currIndex++;
    }
    return -1;
  }
  return -1;
}

// Better solution
function secondLargestElementM2(arr) {
  // move ahead only if array length is more than 1, else return -1
  if (arr.length > 1) {
    let largest = arr[0];
    // traverse 1 time to find the largest element
    for (let index = 1; index < arr.length; index++) {
      if (arr[index] > largest) {
        largest = arr[index];
      }
    }
    // create a variable and set it to min number value
    let secondLargest = Number.MIN_SAFE_INTEGER;
    // traverse again to find the second largest number
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] > secondLargest && arr[index] !== largest) {
        secondLargest = arr[index];
      }
    }

    // if the secondLargest number is not the min number value return the secondLargest number
    // else return -1
    if (secondLargest !== Number.MIN_SAFE_INTEGER) {
      return secondLargest;
    }
    return -1;
  }
  return -1;
}

// Best solution
function secondLargestElementM3(arr) {
  // move ahead only if array length is more than 1, else return -1
  if (arr.length > 1) {
    // initialize largest and second largest to min number value
    let largest = Number.MIN_SAFE_INTEGER;
    let secondLargest = Number.MIN_SAFE_INTEGER;
    // travesrse through each element of the array
    // assign arr[0] to largest
    // if we encounter any number bigger than current largest, assign that to largest
    // and assign current largest to secondLargest
    // If we encounter a number greater than secondLargest but lesser than largest
    // assign that number to secondLargest
    arr.forEach((element) => {
      if (element > largest) {
        secondLargest = largest;
        largest = element;
      } else if (element > secondLargest && element < largest) {
        secondLargest = element;
      }
    });

    // if the secondLargest number is not the min number value return the secondLargest number
    // else return -1
    if (secondLargest !== Number.MIN_SAFE_INTEGER) {
      return secondLargest;
    }
    return -1;
  }
  return -1;
}
