public class Solution {
    public int LongestConsecutive(int[] nums) {

        if(nums.Length == 0)
            return 0;

        HashSet<int> set = nums.ToHashSet();
        List<int> res = new();

        for(int i = 0; i < nums.Length; i++) {

            if(!set.Contains(nums[i] - 1)) {

                int counter = 1;

                for(int j = nums[i] + 1; ; j++) {

                    if(set.Contains(j)) {
                        counter++;
                    }
                    else {
                        break;
                    }
                }

                res.Add(counter);
            }
        }

        return res.Max();
    }
}
