function solution(nums) {
  var array = nums.sort((a, b) => a - b);
  var minNumber = 0;

  console.log(array);

    for(let i = 0; i <= array.length-1 ; i++){
      if (array[i]<= 0) {
        minNumber = 1;
      }
      else if(array[i] !== minNumber){
        minNumber = array[i] + 1;
        console.log(minNumber);
        return minNumber;
      }
      else {
        minNumber++;
      }

    }

  return minNumber;     
};

solution([1, 2, 0]);

// This is a demo task.

// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].
