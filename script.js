//---------------------Task 1-----------------------

function convertFahrToCelsius(fahr) {
  // if it is not a number or it is an Array
  if (isNaN(parseFloat(fahr)) || Array.isArray(fahr)) {

    let errorMessage =
      JSON.stringify(fahr) +
      " is not a valid number but a/an " +
      (Array.isArray(fahr) ? "array" : typeof fahr);

    console.log(errorMessage);
    return errorMessage;

  } else {
    let result = ((fahr - 32) * (5 / 9)).toFixed(4);

    console.log(result);
    return result;
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
    
    console.log(arr);
    return arr;

  } else {
    let error = "invalid parameter: " + JSON.stringify(n);
    console.log(error);
    return error;
  }
}
checkYuGiOh(9);
