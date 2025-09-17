function searchInsert(nums: number[], target: number): number {
    let pos = nums.findIndex(n => n >= target);
    return pos != -1 ? pos : nums.length
};