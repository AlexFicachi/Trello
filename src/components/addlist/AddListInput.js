import React from 'react';
import styled from 'styled-components';
import {Input} from '../shared/Input'
import {Animation} from './Animation';

export const AddListInput = () => {
    return (
        <Wrapper>
            <Input
                placeholder={'Enter list title...'}
                animation={Animation}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`

`

