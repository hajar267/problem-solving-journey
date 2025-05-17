function containsDuplicate(nums: number[]): boolean {

    const map = {};
    map[nums[0]] = 0;
    for(let i = 1; i < nums.length ; i++){
        if (map[nums[i]] !== undefined){
            return true;
        }
        map[nums[i]] = i;
    }
    return false;
};