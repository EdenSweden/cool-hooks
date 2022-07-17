import { useMemo, useDeferredValue, useEffect } from 'react';

export default function UseDeferredValueExample({ input }){
    const LIST_SIZE = 20000;
    //tells react to take input and not update it if lots of changes are going on. Once the changes have stopped for a bit, then it will update so the page isn't slowed down:
    const deferredInput = useDeferredValue(input);
    const list = useMemo(() => {
        const l = [];
        for (let i = 0; i < LIST_SIZE; i++){
            l.push(<div key={i}>{deferredInput}</div>)
        }
        return l;
    }, [deferredInput]);

    //see this in action in the console:
    useEffect(() => {
        console.log(`Input: ${input}\nDeferred: ${deferredInput}`)
    }, [input, deferredInput]);

    return list;
}