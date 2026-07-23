/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {

    return strs.map((str) => {
        return str.length + '#' + str;
    }).join('');
    
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    
    let i = 0;

    const res = [];

    while(i < s.length) {

        const hashIndex = s.indexOf('#', i);

        const length = Number(s.substring(i, hashIndex));

        const startIndex = hashIndex + 1;

        const endIndex = startIndex + length;

        const word = s.substring(startIndex, endIndex);

        res.push(word);

        i = endIndex;

    }

    return res;

};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */