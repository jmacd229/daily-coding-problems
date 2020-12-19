from typing import List

class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        
# If we find a number then we make that index negative
        result =[];
        for num in nums:
            if nums[abs(num)-1] > 0:
                nums[abs(num)-1] = nums[abs(num)-1] * -1;
        for i in range(len(nums)):
            if nums[i] > 0:
                result.append(i + 1);

        return result;

fd = Solution()
print(fd.findDisappearedNumbers([4,3,2,7,8,2,3,1]))