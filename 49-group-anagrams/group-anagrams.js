/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    const seen = new Map();

    for(const word of strs) {

        const key = Array.from(word).sort((a, b) => {
            return a.localeCompare(b);
        }).join('');

        console.log('key', key);

        if(!seen.has(key)) {
            seen.set(key, []);
        }

        const prev = seen.get(key);
        const next = prev.concat(word);

        seen.set(key, next);
    }
    
    return [...seen.values()];
};