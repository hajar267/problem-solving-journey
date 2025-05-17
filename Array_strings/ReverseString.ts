function reverseString(s: string[]): void {
    
    for(let i = 0; i < (s.length - 1)/2 ; i++)
    {
        const len = s.length - 1 -i;
        const tmp = s[i];
        s[i] = s[len];
        s[len] = tmp;
        console.log(s);
    }
};