class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let flag = false;
        let freqArr = [];
        for (let i = 0 ; i < nums.length; i++) {
            if(!freqArr[nums[i]]){
                freqArr[nums[i]] = 1;
            }else{
                freqArr[nums[i]]++;
            }
            if(freqArr[nums[i]] === 2){
                flag = true;
            }
        }
        return flag;
    }
}
