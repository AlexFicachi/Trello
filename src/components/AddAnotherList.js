import React, {useContext} from 'react'
import styled from 'styled-components';
import {ToggleInput} from './shared/ToggleInput';

export const AddAnotherList = () => {

    return (
        <Wrapper>
            <ToggleInput
                text={'Add another list'}
                color={'white'}
                fontWeight={550}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding-left: 5px;
    padding-top: 2px;
    height: 40px;
    width: 272px;
    background: #469ED0;
    border-radius: 3px;
    &:hover{
        background: #5BA4D4;
    }
`