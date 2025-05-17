function firstUniqChar(s:string): number{

    const map:{[key:string]:number} = {};

    for(const element of s){
        map[element] = (map[element] || 0) +1;
    }
    for(let i =0; i < s.length ; i++){
        if (map[s[i]] == 1){
            return i;
        }
    }

    return -1;
}