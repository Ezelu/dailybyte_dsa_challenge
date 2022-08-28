// This question is asked by Google. Given two integer arrays, return their intersection.
// Note: the intersection is the set of elements that are common to both arrays.

// Ex: Given the following arrays...

// nums1 = [2, 4, 4, 2], nums2 = [2, 4], return [2, 4]
// nums1 = [1, 2, 3, 3], nums2 = [3, 3], return [3]
// nums1 = [2, 4, 6, 8], nums2 = [1, 3, 5, 7], return []



function getIntersection (first, second) {
  // Initialize an empty array to hold the intersection
  const intersection = [];
  
  for(let each of first) {
    // Return any that's a member of the second but isn't included in intersection to avoid duplicates
    if (second.includes(each) && !intersection.includes(each)) {
      intersection.push(each)
    }
  }

  return intersection
}


const x = [2, 4, 4, 2];
const y = [2, 4];

console.log(getIntersection(x, y))




