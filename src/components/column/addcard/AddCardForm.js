import React, {useContext} from 'react'
import styled from 'styled-components';
import {AddCardInput} from './AddCardInput';
import {AddCardButton} from './AddCardButton';
import {CancelCard} from './CancelCard';
import {Form} from '../../shared/Form'
import {useInput} from '../../shared/useInput';
import {Context} from '../../../Context';
import {OutsideClick} from '../../shared/OutsideClick';

export const AddCardForm = () => {
    const myContext = useContext(Context);
    const { addCard } = myContext.functions;
    const { columnIndex } = myContext;

    const [bind, onSubmit] = useInput('', addCard, columnIndex);
    
    return (
        <Wrapper>
            <OutsideClick
                myStyle={`
                    z-index: 1;
                `}
            />
            <Form
                onSubmit={onSubmit}
                input={
                    <AddCardInput 
                        bind={bind}
                    />
                }
                add={<AddCardButton/>}
                remove={<CancelCard/>}
                myStyle={`
                    z-index: 2;
                `}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`

`

/* ONBLUR STRATEGY
    background style:
        full page
        z-index so it's behind all buttons;
    
    z-indexes:
        background: 1;
        form: 2
        buttons: 2;
    
    background clicked ? toggleAddCardInput;

    // TODO
    add z-index to all buttons
    Make sure input gets refocused on every submit
    make sure only one form can be displayed at a time.
*/