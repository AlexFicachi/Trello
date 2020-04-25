import React from 'react'
import styled from 'styled-components';

export const OutsideClick = ({onClick, myStyle}) => {
    return (
        <Background
            onClick={onClick}
            myStyle={myStyle}
        />
    )
}

const Background = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: 1;
    ${({myStyle})=>myStyle}
`