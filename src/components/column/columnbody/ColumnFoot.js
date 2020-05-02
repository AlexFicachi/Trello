import React from 'react'
import styled from 'styled-components';
import {AddAnotherCard} from '../AddAnotherCard';

export const ColumnFoot = () => {
    return (
        <Wrapper>
            <AddAnotherCard/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    min-height: 38px;
`
