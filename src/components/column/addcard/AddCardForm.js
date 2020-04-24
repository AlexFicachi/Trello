import React, {useContext} from 'react'
import styled from 'styled-components';
import {AddCardInput} from './AddCardInput';
import {AddCardButton} from './AddCardButton';
import {CancelCard} from './CancelCard';
import {Form} from '../../shared/Form'
import {useInput} from '../../shared/useInput';
import {Context} from '../../../Context';

export const AddCardForm = () => {
    const myContext = useContext(Context);
    const { addCard } = myContext.functions;
    const { columnIndex } = myContext;

    const [value, bind, onSubmit] = useInput('', addCard, columnIndex);
    
    return (
        <Wrapper>
            <Form
                onSubmit={onSubmit}
                input={
                    <AddCardInput 
                        bind={bind}
                    />
                }
                add={<AddCardButton/>}
                remove={<CancelCard/>}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`

`