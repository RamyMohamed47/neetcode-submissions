class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0;
        let j = heights.length - 1;
        let water = 0;
        while (i < j) {
            if ((j - i) * Math.min(heights[i], heights[j]) > water) {
                water = (j - i) * Math.min(heights[i], heights[j]);
            }
            if (heights[i] < heights[j]) {
                i++;
            } else {
                j--;
            }
        }
        return water;
    }
}
