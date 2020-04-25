import React, {useContext} from 'react'
import styled from 'styled-components';
import {Context} from '../../Context';

export const OutsideClick = ({onClick, myStyle}) => {
    const myContext = useContext(Context);

    const { closeAllInputs } = myContext.functions;

    return (
        <Background
            onClick={closeAllInputs}
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