import React from 'react'
import styled from 'styled-components';
import {ToggleInput} from './shared/ToggleInput';

export const AddAnotherList = () => {

    return (
        <Wrapper>
            <ToggleInput
                text={'Add another list'}
                myStyle={`
                    color: white;
                    font-weight: 550;
                `}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding-left: 5px;
    cursor: pointer;
    padding-top: 2px;
    height: 40px;
    width: 272px;
    background: hsla(0,0%,100%,.24);
    transition: 0.1s;
    border-radius: 3px;
    &:hover{
        background: #5BA4D4;
    }
`