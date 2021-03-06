import React, {useContext, useEffect} from 'react'
import styled from 'styled-components';
import {Context} from '../../Context'

export const Input = ({value, placeholder, bind}) => {
    const myContext = useContext(Context);
    const color = myContext.theme.color.columnText;
    const inputRef = bind.ref;
    useEffect(()=>{
        inputRef.current.focus();
    })
    return (
        <StyledInput 
            value={value}
            placeholder={placeholder}
            myStyle={`
                color: ${color};
            `}
            {...bind}
        />
    )
}

const StyledInput = styled.input`
    margin-top: 1px;
    width: 100%;
    height: 36px;
    font-size: 1em;
    border-color: rgb(0,121,191);
    border-style: solid;
    border-radius: 3px;
    padding: 3px 6px;
    padding-bottom: 4px;
    font-weight: 500;
    ${({myStyle})=>myStyle};
`

