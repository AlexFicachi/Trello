import React from 'react';
import styled from 'styled-components';
import {Input} from '../shared/Input'

export const AddListInput = ({bind}) => {
    return (
        <Wrapper>
            <Input
                placeholder={'Enter list title...'}
                bind={bind}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`

`

