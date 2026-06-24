class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
        let string = s.split(" ").join("").toLowerCase();
        let beginning = 0;
        let end = string.length - 1;
        while (beginning < end) {
            while (beginning < end && !alphabet.includes(string[end])) end--;
            while (beginning < end && !alphabet.includes(string[beginning])) beginning++;

            if (string[beginning] != string[end]) {
                return false;
            }

            end--;
            beginning++;
        }
        return true;
    }
}
