import React from 'react'
import styled from 'styled-components';
import {AddListInput} from './AddListInput';
import {AddListButton} from './AddListButton'
import {AddListCancel} from './AddListCancel'
import {Form} from '../shared/Form'
import {Animation} from './Animation'

export const AddListForm = () => {
    return (
        <Wrapper>
            <Form
                input={<AddListInput/>}
                add={<AddListButton/>}
                remove={<AddListCancel/>}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background: rgb(235,236,240);
    width: 272px;
    padding: 4px;
    border-radius: 3px;
    ${Animation('80px', 'form')}
`
// height: 80px; <-- add back to Wrapper