type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
    
    return async function(...args) {

        const prom1 = fn.apply(this, args);
        const prom2 = new Promise((res, rej) => {

            setTimeout(() => {
                rej('Time Limit Exceeded');
            },t);


        });
        
        return Promise.race([prom1, prom2]);
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */