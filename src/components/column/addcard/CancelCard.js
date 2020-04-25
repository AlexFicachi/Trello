import React, {useContext} from 'react'
import styled from 'styled-components';
import {XIcon} from '../../shared/XIcon'
import {Context} from '../../../Context'

export const CancelCard = () => {
    const myContext = useContext(Context);
    const {toggleAddCardInput} = myContext.functions
    const {columnIndex} = myContext

    return (
        <Wrapper
            onClick={()=>toggleAddCardInput(columnIndex)}
        >
            <XIcon/>
        </Wrapper>
    )
}

const Wrapper = styled.div`

`
