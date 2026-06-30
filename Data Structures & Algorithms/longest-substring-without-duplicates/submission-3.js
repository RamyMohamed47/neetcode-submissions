class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = [];
        let maxLength = 0;

        for (let i = 0; i < s.length; i++) {
            while (set.includes(s[i])) {
                set.shift();
            }
            set.push(s[i]);

            maxLength = Math.max(maxLength, set.length);
        }

        return maxLength;
    }
}
