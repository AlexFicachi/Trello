import React from 'react'
import styled from 'styled-components';
import {AddCardInput} from './AddCardInput';
import {AddCardButton} from './AddCardButton';
import {CancelCard} from './CancelCard';

export const AddCardForm = () => {
    return (
        <Wrapper>
            <AddCardInput/>
            <Buttons>
                <AddCardButton/>
                <CancelCard/>
            </Buttons>
        </Wrapper>
    )
}

let Wrapper = styled.div`

`

let Buttons = styled.div`
    display: flex;
    align-items: center;
`
