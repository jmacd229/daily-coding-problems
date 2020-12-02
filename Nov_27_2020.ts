// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// Follow-up: what if you can't use division?

/*
NOTES:


How about we see how the result relates to the input?
[1, 2, 3, 4, 5] = [120, 60, 40, 30, 24]
Multiply them all together and then just divide by the index!

*/

function alternativeProduct(nums: number[]): number[] {
  if (nums.length <= 1) {
    return nums;
  }
  const product = nums.reduce((n1, n2) => n1 * n2);
  return nums.map((n) => product / n);
}

//console.log(alternativeProduct([1, 2, 3, 4, 5]));

/* NOTES CONTINUED

What if we can't divide??

n0 = n1 x n2 x n3
n1 = n0 x n2 x n3
n2 = n0 x n1 x n3
n3 = n0 x n1 x n2

so if we calculat n0 x n1 first we get n01

n0 = n1 x n2 x n3
n1 = n0 x n2 x n3
n2 = n01 x n3
n3 = n01 x n2

if we then do n2 x n3 we get n23 

n0 = n1 x n23
n1 = n0 x n23
n2 = n01 x n3
n3 = n01 x n2

How would this work for odd

n0 = n1 x n2 x n3 x n4 x n5 x n6
n1 = n0 x n2 x n3 x n4 x n5 x n6
n2 = n0 x n1 x n3 x n4 x n5 x n6
n3 = n0 x n1 x n2 x n4 x n5 x n6
n4 = n0 x n1 x n2 x n3 x n5 x n6
n5 = n0 x n1 x n2 x n3 x n4 x n6
n6 = n0 x n1 x n2 x n3 x n4 x n5

n0 x n1 = n01

n0 = n1 x n2 x n3 x n4 x n5 x n6
n1 = n0 x n2 x n3 x n4 x n5 x n6
n2 = n01 x n3 x n4 x n5 x n6
n3 = n01 x n2 x n4 x n5 x n6
n4 = n01 x n2 x n3 x n5 x n6
n5 = n01 x n2 x n3 x n4 x n6
n6 = n01 x n2 x n3 x n4 x n5

what if we then did n01 x n2 = n012

n0 = n1 x n2 x n3 x n4 x n5 x n6
n1 = n0 x n2 x n3 x n4 x n5 x n6
n2 = n01 x n3 x n4 x n5 x n6
n3 = n012 x n4 x n5 x n6
n4 = n012 x n3 x n5 x n6
n5 = n012 x n3 x n4 x n6
n6 = n012 x n3 x n4 x n5

Then n012 x n3 and n0123 x n4 ?

n0 = n1 x n2 x n3 x n4 x n5 x n6
n1 = n0 x n2 x n3 x n4 x n5 x n6
n2 = n01 x n3 x n4 x n5 x n6
n3 = n012 x n4 x n5 x n6
n4 = n0123 x n5 x n6
n5 = n0123 x n4 x n6
n6 = n0123 x n4 x n5

n0 = n1 x n2 x n3 x n4 x n5 x n6
n1 = n0 x n2 x n3 x n4 x n5 x n6
n2 = n01 x n3 x n4 x n5 x n6
n3 = n012 x n4 x n5 x n6
n4 = n0123 x n5 x n6
n5 = n01234 x n6
n6 = n01234 x n5

Then try to reverse?

Then n6 x n5 = n56

n0 = n1 x n2 x n3 x n4 x n56
n1 = n0 x n2 x n3 x n4 x n56
n2 = n01 x n3 x n4 x n56
n3 = n012 x n4 x n56
n4 = n0123 x n56
n5 = n01234 x n6
n6 = n01234 x n5

n56 x n4 = n456, n456 x n3 = n3456, n2

n0 = n1 x n2 x n3 x n456
n1 = n0 x n2 x n3 x n456
n2 = n01 x n3 x n456
n3 = n012 x n456
n4 = n0123 x n56
n5 = n01234 x n6
n6 = n01234 x n5

n0 = n1 x n2 x n3456
n1 = n0 x n2 x n3456
n2 = n01 x n3456
n3 = n012 x n456
n4 = n0123 x n56
n5 = n01234 x n6
n6 = n01234 x n5

n0 = n1 x n23456
n1 = n0 x n23456
n2 = n01 x n3456
n3 = n012 x n456
n4 = n0123 x n56
n5 = n01234 x n6
n6 = n01234 x n5

*/

function alternativeProductNoDivision(nums: number[]): number[] {
  if (nums.length <= 1) {
    return nums;
  }
  const forwardNums: number[] = [];
  const reverseNums: number[] = [];

  // Frontwards
  for (let i = 0; i < nums.length - 1; i++) {
    // if newNums is empty then it just gets the first num from nums
    if (!forwardNums.length) {
      forwardNums.push(nums[i]);
    } else {
      forwardNums.push(forwardNums[forwardNums.length - 1] * nums[i]);
    }
  }

  // Backwards
  for (let i = nums.length - 1; i > 0; i--) {
    // if newNums is empty then it just gets the first num from nums
    if (!reverseNums.length) {
      reverseNums.push(nums[i]);
    } else {
      reverseNums.push(reverseNums[reverseNums.length - 1] * nums[i]);
    }
  }

  const final: number[] = [reverseNums[reverseNums.length - 1]];

  // Once more to put them together
  for (let i = 1; i < forwardNums.length; i++) {
    final.push(forwardNums[i - 1] * reverseNums[forwardNums.length - 1 - i]);
  }

  final.push(forwardNums[forwardNums.length - 1]);

  return final;
}

/*
so we would do
y[3]
x[0] * y[2]
x[1] * y[1]
x[2] * y[0]
x[3]
*/

// [1, 2, 3, 4, 5] = [120, 60, 40, 30, 24]
//console.log(alternativeProductNoDivision([1, 2, 3, 4, 5]));

/*
forwardNums (5) [1, 2, 6, 24]


1 = n0
2 = n01
6 = n012
24 = n0123

n0 = n1 x n2 x n3 x n4
n1 = n0 x n2 x n3 x n4
n2 = n01 x n3 x n4
n3 = n012 x n4
n4 = n0123


reverseNums (4) [5, 20, 60, 120]

5 = n4
20 = n34
60 = n234
120 = n1234

n0 = n1234
n1 = n0 x n234
n2 = n01 x n34
n3 = n012 x n4
n4 = n0123

we currently have:

x = [n0, n01, n012, n0123]
y = [n4, n34, n234, n1234]

so we would do
y[3]
x[0] * y[2]
x[1] * y[1]
x[2] * y[0]
x[3]

*/

function productNoDivision(nums: number[]): number[] {
  if (nums.length <= 1) {
    return nums;
  }

  const result: number[] = [];

  for (let i = 1; i < nums.length; i++) {
    result.push(nums[i] * nums[i-1]);
    console.log('result', result);
  }

  return [];
}

console.log(productNoDivision([1,2,3,4]));


/* NOTES AGAIN

n0 = n1 x n2 x n3
n1 = n0 x n2 x n3
n2 = n0 x n1 x n3
n3 = n0 x n1 x n2

We got 
[n01, n12, n23]

We need
[n123,     n023,     n013,     n012]
n12 x n3   n23 x n0  n01 x n3  n01 x n2
n23 x n1                       n12 x n0

Therefore we can acheive all final numbers with just n0 and n3

What about a bigger case?

n0 = n1 x n2 x n3 x n4 x n5
n1 = n0 x n2 x n3 x n4 x n5
n2 = n0 x n1 x n3 x n4 x n5
n3 = n0 x n1 x n2 x n4 x n5
n4 = n0 x n1 x n2 x n3 x n5
n5 = n0 x n1 x n2 x n3 x n4

We get 
[n01, n12, n23, n34, n45]

We need
[n12345,        n02345,         n01345,         n01245,         n01235,         n01234]
n12-n34 x n5    n23-n45 x n0    n01-n34 x n5    n01-n45 x n2    n01-n23 x n5    n01-n23 x n4
n12-n45 x n4                    n01-n45 x n3    n12-n45 x n0                    n01-n34 x n2
n23-n45 x n1                                                                    n12-n34 x n0

Therefore there is still a path to the final with just n0 and n5

and on an odd case?

n0 = n1 x n2 x n3 x n4
n1 = n0 x n2 x n3 x n4
n2 = n0 x n1 x n3 x n4
n3 = n0 x n1 x n2 x n4
n4 = n0 x n1 x n2 x n3


We get 
[n01, n12, n23, n34]

We need
[n1234,        n0234,           n0134,         n0124,         n0123]
n12-n34        n23 x n4 x n0    n01-n34        n12 x n0 x n4  n01-n23

*/