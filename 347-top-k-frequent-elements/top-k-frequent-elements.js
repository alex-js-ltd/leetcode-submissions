/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    // Create a freq map for nums
    const seen = new Map();

    for(const n of nums) {

        if(!seen.has(n)) {
            seen.set(n, 0);
        }

        const next = seen.get(n) + 1;
        seen.set(n, next);
    }

    // Create the buckets
    const buckets = Array.from({length: nums.length +1}, () => {
        return [];
    });

    for(const [key, freq] of seen.entries()) {
        buckets[freq].push(key);
    }

    // Return the k most frequent
    const res = [];

    for(let i = buckets.length -1; i >= 0; i--) {

        const bucket = buckets[i];

        for(let k = 0; k < bucket.length; k++) {

            res.push(bucket[k]);
        }


    }

    return res.slice(0, k);
};