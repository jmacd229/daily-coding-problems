function topKFrequent(nums: number[], k: number): number[] {
  let bucket: Array<number[]> = new Array(nums.length + 1);
  let map = {};

  nums.forEach((num) => {
    if (map[num]) {
      map[num] += 1;
    } else {
      map[num] = 1;
    }
  });

  Object.keys(map).forEach((key) => {
    let frequency = map[key];
    if (!bucket[frequency]) {
      bucket[frequency] = [];
    }
    bucket[frequency].push(parseInt(key));
  });

  let result = [];

  for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
    if (bucket[i]) {
      bucket[i].forEach((element) => {
        result.push(element);
      });
    }
  }

  return result;
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
