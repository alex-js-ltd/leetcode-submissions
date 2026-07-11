type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: Obj): Obj {



    function dfs(node: any) {

        if(Array.isArray(node)) {
            
            return node.reduce((acc, curr) => {
                
     

                
            const compactedValue = dfs(curr);

            if (compactedValue !== undefined) {
                acc.push(compactedValue);
            }

                return acc;
            
            }, []);

        }

        if(typeof node === 'object' && node !== null) {

            const entries = Object.entries(node);

            const filteredEntries = entries.reduce((acc, curr) => {
                
            const [k, v] = curr;

                
            const compactedValue = dfs(v);

            if (compactedValue !== undefined) {
                acc.push([k, compactedValue]);
            }

                return acc;
            
            }, []);

            return Object.fromEntries(filteredEntries);

        }

        if(Boolean(node)) {
            return node;
        }

    }
    
    return dfs(obj);
};