import React, { useState, useTransition } from 'react';

//only use useTransition hook when necessary, because it causes more renders than there otherwise would be.

export default function UseTransitionExample(){

    const [isPending, startTransition] = useTransition();
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);

    const LIST_SIZE = 20000;

    function handleChange(e){
        //because this is NOT wrapped in startTransition, it will run immediately. You won't have to wait until the long loop finishes for the changes to show up in input:
        setInput(e.target.value);
        //startTransition tells React that whatever states changes are wrapped in it is low-priority, and will only render those things if there is time:
        startTransition(() => {
            const l = [];
            for(let i = 0; i< LIST_SIZE; i++){
                l.push(e.target.value);
            }
            setList(l);
        })
    }

    return(
        <>
            <input type='text' value={input} onChange={handleChange} />
            {isPending 
            ? "Loading..." 
            : list.map((item, index)=> {
                return <div key={index}>{item}</div>
            })}
        </>
    )
}