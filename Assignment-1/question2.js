function technicalInterviewCheck(marks, cutoff) {
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
        reject("Sorry, you have not cleared the Technical Interview.");
      }
    }, 2000);
  });
}

// Output
technicalInterviewCheck([70, 78, 82, 76], 65)
  .then((average) => {
    console.log("Technical Interview cleared. Average score: " + average);
  })
  .catch((error) => {
    console.log(error);
  });