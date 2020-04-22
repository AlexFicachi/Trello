import React from 'react';
import styled from 'styled-components';

export const Button = ({text, color, hover, width}) => {
    return (
        <Btn
            color={color}
            hover={hover}
            width={width}
        >
            {text}
        </Btn>
    )
}

let Btn = styled.button`
    background: ${({color})=>color};
    color: white;
    padding: 6px ${({width})=>width}px;
    border: none;
    display: inline-block;
    font-weight: 650;
    line-height: 20px;
    font-size: 1em;
    border-radius: 3px;
    cursor: pointer;
    &:hover{
        background: ${({hover})=>hover};
    }
`
