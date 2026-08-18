function codingScoreCheck(marks, cutoff) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let total = 0;
      for (let i = 0; i < marks.length; i++) {
        total = total + marks[i];
      }
      const average = total / marks.length;

      if (average >= cutoff) {
        resolve(average);
      } else {
        reject("Sorry, you have not cleared the Coding Assessment.");
      }
    }, 2000);
  });
}

// Output
codingScoreCheck([80, 75, 90, 85], 70)
  .then((average) => {
    console.log("Coding Assessment cleared. Average score: " + average);
  })
  .catch((error) => {
    console.log(error);
  });