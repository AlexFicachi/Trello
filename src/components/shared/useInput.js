import {useState, useRef} from 'react'

export const useInput = (initialValue='', submitResult, columnIdx, cardIdx) => {
    const [value, setValue] = useState(initialValue);
    const myRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        submitResult(value, columnIdx, cardIdx);
        setValue(initialValue);
    }
    
    const enterPressed = (e) => {
        // return true if enter ('\n') was pressed
        return e.target.value.split(value).join('').match(/\n/gi);
    }

    const handleChange = (e) => {
        if (enterPressed(e)){
            console.log('enter pressed');
            handleSubmit(e);
        } else {
            console.log('value pressed');
            setValue(e.target.value);
        }
    }

    const bind = {
        value,
        onChange: handleChange,
        ref:myRef,
    }

    return [bind, handleSubmit, myRef];
}
