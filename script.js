function manipulateArray() {
  const outputDiv = document.getElementById("output");

  // Initially empty
  outputDiv.textContent = "";

  // Start immediately (to match test timing)
  Promise.resolve([1, 2, 3, 4])
    .then((arr) => {
      const evenNumbers = arr.filter(num => num % 2 === 0);

      return new Promise((resolve) => {
        setTimeout(() => {
          outputDiv.textContent = evenNumbers.join(",");
          resolve(evenNumbers);
        }, 1000); // After 1 second
      });
    })
    .then((evenNumbers) => {
      const doubled = evenNumbers.map(num => num * 2);

      return new Promise((resolve) => {
        setTimeout(() => {
          outputDiv.textContent = doubled.join(",");
          resolve(doubled);
        }, 2000); // After total 3 seconds
      });
    });
}

// Run on page load
window.onload = manipulateArray;