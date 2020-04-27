import React, {useContext} from 'react'
import styled from 'styled-components';
import {AddAnotherCard} from '../AddAnotherCard';
import {AddCardForm} from '../addcard/AddCardForm'
import {Context} from '../../../Context';

export const ColumnFoot = () => {
    const myContext = useContext(Context);
    const columnFoot = myContext.state.addCardInput ? <AddCardForm/> : <AddAnotherCard/>

    return (
        <Wrapper>
            {columnFoot}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    min-height: 38px;
`
