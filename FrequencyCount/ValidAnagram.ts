function isAnagram(s: string, t: string): boolean {
   const maps: { [key:number]: number } ={};
   const mapt: {[key:number]:number} ={};
   if (t.length !== s.length){
    return false;
   }
   for(const element of t){
    mapt[element] = (mapt[element] || 0) + 1;
   }
   for(const element of s){
    maps[element] = (maps[element] || 0) + 1;
   }


   for (const key in maps){
    if (maps[key] !== mapt[key]){
        return false;
    }
   }
    return(true);
}