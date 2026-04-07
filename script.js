function manipulateArray() {
	const outputDiv = document.getElementById("output");

      // Initial Promise (3 sec delay)
	return new Promise((resolve) => {
		setTimeout(() => {
          resolve([1, 2, 3, 4]);
        }, 3000);
      })
      .then((arr) => {
        // First Transformation: Filter even numbers
        const evenNumbers = arr.filter(num => num % 2 === 0);

        return new Promise((resolve) => {
          setTimeout(() => {
            // Update DOM after 1 sec
            outputDiv.textContent = evenNumbers;
            resolve(evenNumbers);
          }, 1000);
        });
      })
      .then((evenNumbers) => {
        // Second Transformation: Multiply by 2
        const doubled = evenNumbers.map(num => num * 2);

        return new Promise((resolve) => {
          setTimeout(() => {
            // Update DOM after additional 2 sec
            outputDiv.textContent = doubled;
            resolve(doubled);
          }, 2000);
        });
      });
    }

    // Call the function on page load
    manipulateArray();