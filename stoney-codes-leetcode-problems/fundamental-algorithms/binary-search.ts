// Basic binary search implementation
// Time complexity: O(log n)
// Space complexity: O(1)
function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return -1;
}

// xx/03/25 rep

// 06/03/25 rep
// requirements: the provided array is sorted
// time complexity: O(log n) as it halves the search set each iteration, making it faster than linear
// so binary search works by 
// - noting the left most index starting at 0
// - noting the right most index starting at the end of the provided array
// - for each iteration while leftMostIndex doesnt exceed the rightMostIndex
// - noting the middle index, half of (left + right) / 2, rounded down
//    - if we only do right / 2 we will only ever get the middle of the whole array every iteration
//    - if we do (left + right) / 2 we offset the middle further up the array if left becomes a larger index value
//    - or we offset the middle further down the array if the right becomes a smaller index value
//    - conceptually visualising the left index shifting and then resulting in the correct middle index when (left + right) / 2 needs some work
//    - if the middle index value is the target return the index and end the search
//    - if the middle index value < target then shift the left most index to the middle index
//       - we don't care about anything between leftMostIndex and middle bc we know that 
//       - 1 - middle index value is not the value we are looking for
//       - 2 - the input array is sorted
//       - 3 - everything below MUST be less than the target which is no longer needed for this search
//    - if the middle index value > target then shift the right most index down to middle - 1
//       - this is bc we know the the middle index and everything to the right is not going to match
//       - because the input is sorted
// - if we have leftMostIndex being greater then rightMostIndex then we stop and exit with -1 bc we didnt find the value
const binarySearch = (nums: number[], target: number): number => {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2); 
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return -1
}

// 05/03/25 rep
// returns the index of where the target is or -1 if not found
const binarySearch = (nums: number[], target: number): number => {
    let leftMostIndex = 0;
    let rightMostIndex = nums.length -1;

    while (leftMostIndex <= rightMostIndex) {
        const middleIndex = Math.floor((leftMostIndex + rightMostIndex) / 2);
        if (nums[middleIndex] === target) {
            return middleIndex;
        }
        // if the middle value is less than the target
        // then we know everything to the left of the middleIndex is too low and we can ignore them
        // set the new leftMost index to the current middle + 1 (+1 because we already checked the middle)
        if (nums[middleIndex] < target) {
            leftMostIndex = middleIndex + 1;
        }
        // else the middle value must be > than the target
        // then we know everything to the right of middleIndex is too high and we can ignore them
        // set the new rightMost index to the current middle - 1 (-1 because we already checked the middle)
        else {
            rightMostIndex = middleIndex - 1;
        }
    }
    return -1;
}