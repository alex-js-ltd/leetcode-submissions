/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Promise<any>}
 */
var promisePool = async function(functions, n) {
    
    return new Promise((res, rej) => {

        if(functions.length === 0) {
            res([]);
            return;
        }

        const results = Array.from({length: functions.length}, () => {
            return null;
        });

        let unresolved = functions.length;

        let nextIndex = 0;

        function traverse(i) {

            nextIndex += 1;

            const prom = functions[i]();

            Promise.resolve(prom).then((result) => {

                results[i] = result;

                unresolved -= 1;

                if(unresolved === 0) {
                    res(results);
                    return;
                }

                if(nextIndex < functions.length) {
                    traverse(nextIndex);
                }

            }).catch(rej);


        }

        const size = Math.min(n, functions.length);

        for(let i = 0; i < size; i++) {

            traverse(i);
        }


    });
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */