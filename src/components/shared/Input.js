import React, {useContext} from 'react'
import styled from 'styled-components';
import {Context} from '../../Context'

export const Input = ({value, placeholder, animation}) => {
    const myContext = useContext(Context);

    return (
        <StyledInput 
            value={value}
            color={myContext.theme.color.columnText}
            placeholder={placeholder}
            animation={animation}
        />
    )
}

const StyledInput = styled.input`
    margin-top: 1px;
    width: 100%;
    height: 0px;
    font-size: 1em;
    border-color: rgb(0,121,191);
    border-style: solid;
    border-radius: 3px;
    padding: 3px 6px;
    padding-bottom: 4px;
    font-weight: 500;
    color: ${({color})=>color};
    ${({animation})=>animation('36px', 'input')}
`
//     ${({animation})=>animation('36px')}

