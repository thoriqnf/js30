const nemo = ["nema"];

function findNemo(array) {
  var t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nema") {
      console.log("Found Nemo");
    }
  }
  var t1 = performance.now();
  console.log("call to find Nemo took" + (t1 - t0) + " milliseconds");
}

findNemo(nemo);
