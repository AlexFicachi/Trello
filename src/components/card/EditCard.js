import React from 'react';
import styled from 'styled-components';
import {EditCardInput} from './EditCardInput';
import {SaveCardButton} from './SaveCardButton';
import {DeleteCardButton} from './DeleteCardButton';

export const EditCard = () => {
    return (
        <>
            <Background/>
            <Wrapper>
                    <EditCardInput/>
                <Buttons>
                    <SaveCardButton/>
                    <DeleteCardButton/>
                </Buttons>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2;
`

const Buttons = styled.div`
    display: flex;
    justify-content: space-around;
`

const Background = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    background: rgba(0,0,0,0.5);
    top: 0;
    left: 0;
    z-index: 1;
`
