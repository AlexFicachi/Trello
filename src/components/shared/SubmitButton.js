import React from 'react';
import styled from 'styled-components';

export const SubmitButton = ({text, myStyle}) => {
    return (
        <Btn 
            myStyle={myStyle}
            value={text}
            type={'submit'}
        >
            
        </Btn>
    )
}

const Btn = styled.input`
    color: white;
    padding-top: 6px;
    padding-bottom: 6px;
    border: none;
    display: inline-block;
    font-weight: 650;
    line-height: 20px;
    font-size: 1em;
    border-radius: 3px;
    cursor: pointer;
    ${({myStyle})=>myStyle};
    -webkit-appearance: none;
`
