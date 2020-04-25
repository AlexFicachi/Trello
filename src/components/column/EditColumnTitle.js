import React, {useContext} from 'react'
import styled from 'styled-components';
import {Textarea} from '../shared/Textarea';
import {Context} from '../../Context';
import {useInput} from '../shared/useInput';
import {OutsideClick} from '../shared/OutsideClick';

export const EditColumnTitle = () => {
    const myContext = useContext(Context);
    const value = myContext.state.name;
    const { editList } = myContext.functions;
    const { columnIndex } = myContext;
    const { cardIndex } = myContext;
    const { toggleEditColumnInput } = myContext.functions;
    const [bind, onSubmit] = useInput(value, editList, columnIndex, cardIndex);

    return (
        <Wrapper>
            <OutsideClick
                myStyle={``}
            />
            <form
                onSubmit={onSubmit}
                style={{position: 'relative',zIndex: '2'}}
            >
                <Textarea
                    value={value}
                    myStyle={`
                        font-weight: 600;
                    `}
                    wrapperStyle={`
                        padding-bottom: 0px;
                        padding-top: 2px;
                        padding-left: 6px;
                        padding-right: 0px;
                    `}
                    bind={bind}
                />
            </form>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    border: 2px solid rgb(0,121,191);
    border-radius: 3px;
    margin-bottom: 3px;
`

// z-index