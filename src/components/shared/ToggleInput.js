import React from 'react'
import styled from 'styled-components';

export const ToggleInput = ({color, text, fontWeight}) => {
    return (
        <Wrapper
            color={color}
            fontWeight={fontWeight}
        >
            <Plus>+</Plus>{text}
        </Wrapper>
    )
}

let Wrapper = styled.div`
    font-weight: ${({fontWeight})=>fontWeight};
    color: ${({color})=>color};
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 3px;
`

let Plus = styled.span`
    font-weight: 400;
    font-size: 20px;
    margin-right: 7px;
`
