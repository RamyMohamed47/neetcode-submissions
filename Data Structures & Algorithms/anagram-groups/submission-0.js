class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};
        for(let i = 0 ; i < strs.length ; i++) {
            let sortedString = strs[i].split('').sort().join('');
            if(!map[sortedString]){
                map[sortedString] = [];
                map[sortedString].push(strs[i]);
            } else {
                map[sortedString].push(strs[i]);
            }
        }
        let res = [];
        for(let key of Object.keys(map)){
            res.push(map[key]);
        }
        return res;
    }
}
