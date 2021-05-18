// ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3], [4, 5, 6], [7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2], [3, 4], [5, 6], [7]]

function chunkArray(arr, len) {
  // First solution
  //   // Init chunked arr
  //   const chunkedArr = [];
  //   // Set index
  //   let i = 0;
  //   // Loop while index is less than the array length
  //   while (i < arr.length) {
  //     // Slice out from the index to the index + the chunk length push on to the chunked array
  //     chunkedArr.push(arr.slice(i, i + len));
  //     // Increment by chunk length
  //     i += len;
  //   }
  //   return chunkedArr;
  ///////////////////////

  // Second solution
  // Init chunked arr
  const chunkedArr = [];

  // Loop through arr
  arr.forEach(val => {
    const last = chunkedArr[chunkedArr.length - 1];

    // Check if last and if last length is equal to the chunk len
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunkedArr;
}

console.log('CHUNK_ARRAY', chunkArray([1, 2, 3, 4, 5, 6, 7], 2));
