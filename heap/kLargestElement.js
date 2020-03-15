function kthLargestElement(nums, k) {
  const sorted = nums.sort(function(a, b){return b-a});
  // console.log(sorted);
  var i = k;
  var index = 0;
  var memVal = -1;

//   while (k >= 1) {
//     if (memVal != sorted[index]) {
//       memVal = sorted[index];
//       k -= 1;
//     }
//     index += 1;
//   }
  // console.log(memVal);
  return sorted[k-1];
}

kthLargestElement([7, 6, 5, 4, 3, 2, 1], 2);
