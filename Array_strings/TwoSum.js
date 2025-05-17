// for Brute Force (First Thought)

var twoSum = function(nums, target) {
	const arr=[];
    for(let i=0; i < nums.length - 1 ; i++){
		for(let j = i + 1; j < nums.length ; j++){
			if (nums[i] + nums[j] === target){
				arr.push(i, j);
				return arr;
			}
		}
	}
};

// console.log(twoSum([3,3], 6));



                        ////////////////////////////////////////////////



// optimize (Use a Map) ()
/*
First time using the map (object) to solve problems!
I used an object as a map to store numbers and their corresponding indices.
For each number in the array, I calculate the required number (remain) that would sum 
with the current number to equal the target.
If this required number exists in the map (i.e., we've already seen it), I know we've 
found the two numbers that sum to the target, and I return their indices.
If not, I add the current number and its index to the map for future reference.
Why use a map?
A map allows me to quickly check if a number has already been seen, which reduces 
the time complexity to O(n) compared to a brute force approach with O(n²).*/

var twoSum = function(nums, target) {
	const map = {};
	for (let i =0 ; i < nums.length ; i++){
		const remain = target - nums[i];
		if (map[remain] !== undefined){
			return [map[remain], i];
		}
		map[nums[i]] = i;
	}
};

// console.log(twoSum([3,3], 6));
