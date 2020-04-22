import React from 'react'
import styled from 'styled-components';
import {Textarea} from '../../shared/Textarea';

export const AddCardInput = () => {
    return (
        <Wrapper>
            <Textarea
                placeholder={"Enter a title for this card..."}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    box-shadow: 0px 1px 0px 0px #aaa;
    border-radius: 4px;
    margin-bottom: 8px;
    padding-bottom: 15px;
    background: white
`