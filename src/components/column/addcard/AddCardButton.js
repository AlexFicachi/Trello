import React from 'react'
import styled from 'styled-components';
import {GreenButton} from '../../shared/GreenButton'

export const AddCardButton = () => {

    return (
        <Wrapper>
            <GreenButton
                text={'Add Card'}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: inline-block;
`