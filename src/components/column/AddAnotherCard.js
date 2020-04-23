import React, {useContext} from 'react'
import styled from 'styled-components';
import {ToggleInput} from '../shared/ToggleInput';
import {Context} from '../../Context';

export const AddAnotherCard = () => {
    const myContext = useContext(Context)

    return (
        <Wrapper>
            <ToggleInput
                text={'Add another card'}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    opacity: 0.7;
    &:hover{
        opacity: 1;
        background: lightgray;
        border-radius: 3px;
    }
`
