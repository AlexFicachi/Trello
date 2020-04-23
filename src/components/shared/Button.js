import React from 'react';
import styled from 'styled-components';

export const Button = ({text, animation, myStyle}) => {
    return (
        <Btn 
            animation={animation}
            myStyle={myStyle}
        >
            {text}
        </Btn>
    )
}

const Btn = styled.button`
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
    ${({animation})=>animation && animation('32px','add')}
    ${({myStyle})=>myStyle}
`
