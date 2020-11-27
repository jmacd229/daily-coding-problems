// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?

function hasSum(k: number, nums: number[]): boolean{
  
    const remainders: number[] = [];
    let isFound = false;
    
    // Loop through numbers in array
    for(let i = 0; i < nums.length; i++){
      
      // Look through array of remainders that were found when subtracting previous numbers from k
      for(let j = 0; j < remainders.length; j++){
        
        // If the remainders contains the current number in the array then we have found a pair that sums to k
        if(remainders[j] === nums[i]){
          return true;
          // If the remainders contains the current remainder then break so that we don't keep searching and don't add a duplicate to the remainders
        } else if (remainders[j] === k - nums[i]){
          isFound = true;
          break;
        }
      }
      
      // After searching through the remainders if the remainder already existed, do not add it
      if(isFound){
        isFound = false;
        continue;
      } else {
        // Otherwise add to the remainders to search for
        remainders.push(k - nums[i]);
      }
    }
  
    // At this point we have looped through all numbers so there are no further options, return false
    return false;
  }
  
  console.log(hasSum(17,[10,18,3,3,0,4,7]));