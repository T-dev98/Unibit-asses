function findCombinations(arr, target) {
    let combinations = [];
    
    // First combination for the target value
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          combinations.push([arr[i], arr[j]]);
        }
      }
    }
    
    // Merge the array into a single array and sort it
    let mergedArray = arr.slice().sort((a, b) => a - b);
    
    // Second combination for the double target value
    let doubleTarget = target * 2;
    let secondCombinations = [];
    
    for (let i = 0; i < mergedArray.length; i++) {
      let currentCombination = [mergedArray[i]];
      let remainingSum = doubleTarget - mergedArray[i];
      
      for (let j = i + 1; j < mergedArray.length; j++) {
        if (remainingSum >= mergedArray[j]) {
          currentCombination.push(mergedArray[j]);
          remainingSum -= mergedArray[j];
        }
      }
      
      if (remainingSum === 0) {
        secondCombinations.push(currentCombination);
      }
    }
    
    return {
      firstCombination: combinations,
      mergedArray: mergedArray,
      secondCombinations: secondCombinations
    };
  }
  
  // Example usage
  const input = [1, 3, 2, 2, -4, -6, -2, 8];
  const targetValue = 4;
  
  const output = findCombinations(input, targetValue);
  
  console.log("First Combination For '4':", output.firstCombination);
  console.log("Merge Into a Single Array:", output.mergedArray);
  console.log("Second Combination For '8':", output.secondCombinations);
  