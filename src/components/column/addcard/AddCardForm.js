import React from 'react'
import styled from 'styled-components';
import {AddCardInput} from './AddCardInput';
import {AddCardButton} from './AddCardButton';
import {CancelCard} from './CancelCard';
import {Form} from '../../shared/Form'

export const AddCardForm = () => {
    return (
        <Wrapper>
            <Form
                input={<AddCardInput/>}
                add={<AddCardButton/>}
                remove={<CancelCard/>}
            />
        </Wrapper>
    )
}

let Wrapper = styled.div`

`