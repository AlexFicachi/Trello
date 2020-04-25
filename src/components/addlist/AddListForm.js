import React, {useContext} from 'react'
import styled from 'styled-components';
import {AddListInput} from './AddListInput';
import {AddListButton} from './AddListButton'
import {AddListCancel} from './AddListCancel'
import {Form} from '../shared/Form'
import {Animation} from './Animation'
import {useInput} from '../shared/useInput';
import {Context} from '../../Context';
import {OutsideClick} from '../shared/OutsideClick';

export const AddListForm = () => {
    const myContext = useContext(Context);
    const { addList } = myContext.functions;
    const { toggleInputDisplaying } = myContext.functions;

    const [bind, onSubmit] = useInput('', addList);

    return (
        <>
            <OutsideClick
                    myStyle={``}
                />
            <Wrapper>
                <Form
                    input={<AddListInput
                        bind={bind}
                    />}
                    add={<AddListButton/>}
                    remove={<AddListCancel/>}
                    onSubmit={onSubmit}
                />
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    background: rgb(235,236,240);
    width: 272px;
    padding: 4px;
    border-radius: 3px;
    ${Animation('80px', 'form')}
    position: relative;
    z-index: 2;
`
// height: 80px; <-- add back to Wrapper