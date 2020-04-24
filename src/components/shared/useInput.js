import {useState} from 'react'

export const useInput = (initialValue='', submitResult, columnIdx) => {
    let [value, setValue] = useState(initialValue);
    const handleSubmit = (e) => {
        e.preventDefault();
        submitResult(value, columnIdx)
        setValue(initialValue);
    }
    const bind = {
        value,
        onChange: e => {
            setValue(e.target.value);
        }
    }

    return [value, bind, handleSubmit];
}
