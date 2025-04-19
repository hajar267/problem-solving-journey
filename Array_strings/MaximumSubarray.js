//we have an array we should find the sum of largest subarray and return it


/* the first thing come to my brain that use brute force to understand 
the problem well and can find the best optimization  */

var maxSubArray = function(nums) {
	let maxsub = nums.reduce((acc, curr) => acc + curr, 0);
	for (let i = 0; i < nums.length ; i++){
		let sub = 0;
		for (let j = i; j < nums.length ; j++){
			sub += nums[j];
			sub = Math.max(sub, maxsub);
		}
	}
	return maxsub;
};

// console.log(maxSubArray([-2,1,4,-1,2,1,-5,4]));


//////////////////////////////////////////////////


/*
now i will use the Kadane's Algorithm is a greedy algorithm that solves 
the problem in one pass through the array , that is a famous and efficient 
algorithm used to solve the maximum subarray problem, by in each iteration we need
to decide if we should continue in the same sub (if still the sum of array large than
the current num) or jamb to the new subarray (if the current num large that sum of current array)
i think it is a smart way and simple and optimized 
*/  

function maxSubArray(nums) {
	let Sub = nums[0];
    let maxSub = nums[0];
	
    for (let i = 1; i < nums.length; i++) {
        Sub = Math.max(nums[i], Sub + nums[i]);
        maxSub = Math.max(maxSub, Sub);
    }
    return maxSub;
}
console.log(maxSubArray([-2,1,4,-1,2,1,-5,4]));