import React, {useContext} from 'react'
import styled from 'styled-components';
import {AddAnotherCard} from './AddAnotherCard';
import {AddCardForm} from './addcard/AddCardForm'
import {Context} from '../../Context';


export const ColumnFoot = () => {
    let myContext = useContext(Context);

    let columnFoot = myContext.state.addCardInput ? <AddCardForm/> : <AddAnotherCard/>

    return (
        <Wrapper>
            {columnFoot}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    min-height: 38px;
`
