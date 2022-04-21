class Solution(object):
    def twoSum(self, nums, target):
        
        
               
        values = dict()

        for i, elem in enumerate(nums):
            comp = target - elem

            if comp in values:

                return [values[comp], i]

            values[elem] = i

        return []
        
        
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        