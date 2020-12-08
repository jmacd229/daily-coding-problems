function threeSum(nums: number[]): number[][] {
  const res = [];
  nums = nums.sort(function(a,b){return a - b})

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let l = i + 1;
    let r = nums.length - 1;
    while(l < r){
        const threeSum = nums[i] + nums[l] + nums[r];
        if (threeSum > 0) {
            r-=1;
        } else if (threeSum < 0) {
            l+=1;
        } else {
            res.push([nums[i],nums[l],nums[r]]);
            l+=1;
            while(nums[l] === nums[l-1] && l < r){
                l+=1;
            }
        }
    }
  }
  return res;
}

const val = threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]);
console.log(val);