import React, {useContext} from 'react'
import styled from 'styled-components';
import {Context} from '../../Context'

export const Input = ({value, placeholder, animation, bind}) => {
    const myContext = useContext(Context);
    let color = myContext.theme.color.columnText;
    return (
        <StyledInput 
            value={value}
            placeholder={placeholder}
            animation={animation}
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
    height: 0px;
    font-size: 1em;
    border-color: rgb(0,121,191);
    border-style: solid;
    border-radius: 3px;
    padding: 3px 6px;
    padding-bottom: 4px;
    font-weight: 500;
    ${({myStyle})=>myStyle};
    ${({animation})=>animation('36px', 'input')}
`

