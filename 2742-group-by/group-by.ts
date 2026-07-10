interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
}


Array.prototype.groupBy = function(fn) {
    
    const arr = this;

    const len = arr.length;

    const res = {};

    for(let i = 0; i < len; i++) {

        const key = fn(arr[i]);

        if(!Object.hasOwn(res, key)) {
            res[key] = [];
        }

        res[key].push(arr[i]);

    }

    return res;
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */