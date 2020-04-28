import React, {useContext} from 'react'
import styled from 'styled-components';
import {AddAnotherCard} from '../AddAnotherCard';
import {Context} from '../../../Context';

export const ColumnFoot = () => {
    const myContext = useContext(Context);

    return (
        <Wrapper>
            <AddAnotherCard/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    min-height: 38px;
`
