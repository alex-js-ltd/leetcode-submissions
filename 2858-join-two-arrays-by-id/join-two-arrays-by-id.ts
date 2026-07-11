type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {

    const seen = new Map();


    for(let i = 0; i < arr1.length; i++) {

        seen.set(arr1[i].id, {...arr1[i]});
    }

    for(let i = 0; i < arr2.length; i++) {

        if(!seen.has(arr2[i].id)) {
            seen.set(arr2[i].id, {});
        }

        const prev = seen.get(arr2[i].id);
        const next = {...prev, ...arr2[i] };
        seen.set(arr2[i].id, next);
    }
    

    return [...seen.values()].sort((a, b) => a.id - b.id);
};