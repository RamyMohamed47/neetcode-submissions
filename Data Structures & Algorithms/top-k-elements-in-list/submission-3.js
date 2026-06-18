class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = {};
        for (let i = 0 ; i < nums.length; i++){
            if(!freqMap[nums[i]]){
                freqMap[nums[i]] = 1;
            } else{
                freqMap[nums[i]]++;
            }
        }
        
        let keys = Object.keys(freqMap);
        keys.sort((a, b) => freqMap[b] - freqMap[a]);
        
        let res = [];
        for(let i = 0 ; i < k; i++){
            res.push(Number(keys[i]));
        }
        return res;
    }
}
