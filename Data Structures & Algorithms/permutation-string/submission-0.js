class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
     

    checkInclusion(s1, s2) {
        let matches = (a, b) => {
        for (let i = 0; i < 26; i++) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }
        if (s1.length > s2.length) return false;

        const s1Count = new Array(26).fill(0);
        const window = new Array(26).fill(0);

        
        for (let i = 0; i < s1.length; i++) {
            s1Count[s1.charCodeAt(i) - 97]++;
            window[s2.charCodeAt(i) - 97]++;
        }

        
        if (matches(s1Count, window)) return true;

        
        for (let i = s1.length; i < s2.length; i++) {
           
            window[s2.charCodeAt(i) - 97]++;

            
            window[s2.charCodeAt(i - s1.length) - 97]--;

            if (matches(s1Count, window)) return true;
        }

        return false;
    }
    
}
