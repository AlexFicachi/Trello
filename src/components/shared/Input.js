import React, {useContext} from 'react'
import styled from 'styled-components';
import {Context} from '../../Context'

export const Input = ({value}) => {
    let myContext = useContext(Context);

    return (
        <StyledInput 
            value={value}
            color={myContext.theme.color.columnText}
        />
    )
}

let StyledInput = styled.input`
    margin-top: 1px;
    width: 100%;
    min-height: 28px;
    font-size: 1em;
    border-color: rgb(0,121,191);
    border-style: solid;
    border-radius: 3px;
    padding: 3px 6px;
    padding-bottom: 4px;
    font-weight: 550;
    color: ${({color})=>color};
`

