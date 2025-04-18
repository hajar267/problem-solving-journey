/*
i have an array i shoult find the smallest one and then
find the higherest one after the smallest one
*/

var maxProfit = function(prices) {
	let min = prices[0];
	let index = 0;
	for (let i = 0; i < prices.length; i++){
		if (prices[i] < min){
			min = prices[i];
			index = i;
		}
	}
	let max = prices[index + 1];
	if (max === undefined)
		return 0;
	for (let j = index + 1 ; j < prices.length ; j++){
		if (max < prices[j]){
			max = prices[j];
		}
	}
	return max - min;
};

// console.log(maxProfit([7,2,5,9,1,3]));




             ////////////////////////////////////////////////




var maxProfit = function(prices) {
	let min = prices[0];
	let MaxProfite = 0;
	
	for (let i = 1; i < prices.length ; i++){
		let profite = prices[i] - min;
		MaxProfite = Math.max(MaxProfite, profite);
		min = Math.min(min, prices[i]);
		if (min === prices[i]){ MaxProfite = 0;}
	}
	return MaxProfite;
};

console.log(maxProfit([7,2,5,9,1,3]));