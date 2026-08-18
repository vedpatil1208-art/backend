function finalSelectionCheck(codingAverage, technicalAverage, cutoff) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const finalAverage = (codingAverage + technicalAverage) / 2;

      if (finalAverage >= cutoff) {
        resolve(finalAverage);
      } else {
        reject("Sorry, you have not cleared the final selection cutoff.");
      }
    }, 2000);
  });
}

// Output
finalSelectionCheck(82.5, 76.5, 75)
  .then((finalAverage) => {
    console.log("Congratulations! You are selected. Final average: " + finalAverage);
  })
  .catch((error) => {
    console.log(error);
  });