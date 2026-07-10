type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {

    const res = [];

    let chunk = [];

    arr.forEach((el) => {

        chunk.push(el);

        if(chunk.length === size) {
            res.push(chunk);
            chunk = [];
        }

    
    });

    if(chunk.length !== 0) {
        res.push(chunk);
    }
    
    return res;
};
