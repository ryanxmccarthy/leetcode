/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
    if(!s || s.length === 0) { return 0; }
    
    const romanMap = {
        'I' : {v: 1, i: 0},
        'V' : {v: 5, i: 1},
        'X' : {v: 10, i: 2},
        'L' : {v: 50, i: 3},
        'C' : {v: 100, i: 4},
        'D' : {v: 500, i: 5},
        'M' : {v: 1000, i: 6}
    }

    let result = 0;
    let i = 0;
    while(i < s.length) {
        const current = s[i];
        let next = s[i];
        if(i < s.length - 1) {
            next = s[i + 1];
        }
        
        let converted = romanMap[current].v;
        if(isComposite(current, next, romanMap)) {
            converted = romanMap[next].v - romanMap[current].v
            i++;
        }
        result += converted;
        i++
    }

    return result;
};

const isComposite = (current, next, romanMap) => {
    if(romanMap[next].i > romanMap[current].i) {
        return true;
    }
    
    return false;
};