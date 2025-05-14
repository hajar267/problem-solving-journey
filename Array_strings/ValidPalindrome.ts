

function isPalindrome(s: string): boolean {

    let filtred = "";
    for (let i = 0; i < s.length ; i++){
        const C = s[i];
        const code = C.charCodeAt(0);
        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)){
            filtred += C.toLocaleLowerCase();
        }
    }

    let reversed = filtred.split("").reverse().join("");
    console.log(reversed);
    return filtred === reversed;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome("  "));
