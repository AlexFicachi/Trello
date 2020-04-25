import React from 'react'
import styled from 'styled-components';

export const ToggleInput = ({text, myStyle}) => {
    return (
        <Wrapper
            myStyle={myStyle}
        >
            <Plus>+</Plus>{text}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    z-index: 2;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 3px;
    ${({myStyle})=>myStyle};
`

const Plus = styled.span`
    font-weight: 400;
    font-size: 20px;
    margin-right: 7px;
`
