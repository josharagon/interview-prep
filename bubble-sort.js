function countSwaps(a) {
  let moveCount = 0;
  let isSorted = false;
  let lastUnsorted = a.length - 1
  while(!isSorted){
      isSorted = true;
      for(var i = 0; i < lastUnsorted; i++) {
          if(a[i] > a[i + 1]) {
              let temp = a[i];
              a[i] = a[i+1];
              a[i+1] = temp;
              i=0;
              moveCount++
              isSorted = false;
              } 
          }
          lastUnsorted--
  }
  console.log(`Array is sorted in ${moveCount} swaps.
First Element: ${a[0]}
Last Element: ${a.pop()}`)
}

// returns:
// Array is sorted in 12 swaps.
// First Element: 1
// Last Element: 10
countSwaps([4, 5, 2, 1, 10, 3, 6, 7, 8, 9])