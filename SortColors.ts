function sortColors(nums: number[]) {
    let p1 = 0, p2 = nums.length - 1, index = 0;
    while (index <= p2) {
        //If the current number is 0
        //swap it with the pointer at the front
        if (nums[index] == 0) {
            nums[index] = nums[p1];
            nums[p1] = 0;
            p1++;
        }
        //If the current number is 2
        // Swap it with the pointer at the back and move inwards
        if (nums[index] == 2) {
            nums[index] = nums[p2];
            nums[p2] = 2;
            p2--;
            index--;
        }
        index++;
    }
}