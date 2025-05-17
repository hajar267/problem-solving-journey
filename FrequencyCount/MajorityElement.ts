function majorityElement(nums:number[]): number{

    const map:{[key:number]:number} ={};
    for(const e of nums){
        map[e] = (map[e] || 0) + 1;
    }
    const values = Object.values(map);
    const maxValue = Math.max(...values);
    for(let i=0; i < nums.length; i++){
        if (map[nums[i]] == maxValue){
            return(nums[i]);
        }
    }

    return 1;
}