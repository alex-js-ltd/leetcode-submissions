/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {


    return new Promise((res, rej) => {

        const length = functions.length;

        if(length === 0) {
            res([]);
            return;
        }

        const results = Array.from({length}, () => {
            return null;
        });

        let unresolved = length;

        functions.forEach((fn, i) => {

            const prom = fn();

            Promise.resolve(prom).then((result) => {

                results[i] = result;

                unresolved -= 1;

                if(unresolved === 0) {
                    res(results);
                }


            }, rej);


        });




    });
    
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */