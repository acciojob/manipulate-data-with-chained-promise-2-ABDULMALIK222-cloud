function manipulateArray() {
  const outputDiv = document.getElementById("output");

  // Clear initially
  outputDiv.textContent = "";

  Promise.resolve([1, 2, 3, 4])
    .then((arr) => {
      const evenNumbers = arr.filter(num => num % 2 === 0);

      return new Promise((resolve) => {
        setTimeout(() => {
          outputDiv.textContent = evenNumbers.join(",");
          resolve(evenNumbers);
        }, 1000); // 1 second
      });
    })
    .then((evenNumbers) => {
      const doubled = evenNumbers.map(num => num * 2);

      return new Promise((resolve) => {
        setTimeout(() => {
          outputDiv.textContent = doubled.join(",");
          resolve(doubled);
        }, 2000); // +2 seconds (total 3s)
      });
    });
}

// Ensure it runs after DOM loads
window.onload = manipulateArray;