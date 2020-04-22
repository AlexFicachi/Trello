import React, {useContext} from 'react'
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

let Wrapper = styled.div`
    display: inline-block;
`