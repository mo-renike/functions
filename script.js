//---------------------Task 1---------------------
function convertFahrToCelsius(fahr) {
  // if it is not a number or it is an Array
  if (isNaN(fahr) || Array.isArray(fahr)) {
    console.log(
      JSON.stringify(fahr) +
        " is not a valid number but a/an " +
        (Array.isArray(fahr) ? "array" : typeof fahr)
    );
  } else {
    return ((fahr - 32) * (5 / 9)).toFixed(4) + " deg C";
  }
}

convertFahrToCelsius([1, 2, 3]);



//---------------------Task 2-------------------------

function checkYuGiOh(n) {
  let arr = [];
  if (!isNaN(n)) {
    for (let i = 1; i <= n; i++) {
      if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
        arr.push("yu-gi-ho");
      } else if (i % 3 == 0 && i % 5 == 0) {
        arr.push("gi-oh");
      } else if (i % 2 == 0 && i % 5 == 0) {
        arr.push("yu-oh");
      } else if (i % 2 == 0 && i % 3 == 0) {
        arr.push("yu-gi");
      } else if (i % 5 == 0) {
        arr.push("oh");
      } else if (i % 3 == 0) {
        arr.push("gi");
      } else if (i % 2 == 0) {
        arr.push("yu");
      } else {
        arr.push(i);
      }
    }
    return arr;
    console.log(arr);
  } else {
    return "invalid parameter: " + n;
  }
}
checkYuGiOh(9);
