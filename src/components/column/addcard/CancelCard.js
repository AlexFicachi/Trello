import React, {useContext} from 'react'
import styled from 'styled-components';
import {Context} from '../../../Context';
import {XIcon} from '../../shared/XIcon'

export const CancelCard = () => {
    const myContext = useContext(Context);
    const color = myContext.theme.color.columnText;

    return (
        <Wrapper color={color}>
            <XIcon/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
 
`
