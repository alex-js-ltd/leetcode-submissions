type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty(obj: Obj): boolean {
    
    if(obj == null) {
        return false;
    }

    return Object.keys(obj).length === 0;
};