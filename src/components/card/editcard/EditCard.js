import React, {useContext} from 'react';
import styled from 'styled-components';
import {EditCardInput} from './EditCardInput';
import {SaveCardButton} from './SaveCardButton';
import {DeleteCardButton} from './DeleteCardButton';
import {Form} from '../../shared/Form';
import {Context} from '../../../Context';
import {useInput} from '../../shared/useInput';
import {OutsideClick} from '../../shared/OutsideClick';

export const EditCard = () => {
    const myContext = useContext(Context);
    const { toggleEditCardInput } = myContext.functions;
    const { editCard } = myContext.functions
    const { columnIndex } = myContext;
    const { cardIndex } = myContext;
    const { name } = myContext.state;
    const [bind, onSubmit] = useInput(name, editCard, columnIndex, cardIndex);

    return (
        <>
            <OutsideClick
                onClick={()=>toggleEditCardInput(cardIndex,columnIndex)}
                myStyle={`
                    background: rgba(0,0,0,0.5);
                    z-index: 3;
                `}
            />
            <Wrapper>
                 <Form
                     onSubmit={onSubmit}
                     input={<EditCardInput
                         bind={bind}
                     />}
                     add={<SaveCardButton/>}
                     remove={<DeleteCardButton/>}
                     buttonContainerStyle={`
                        justify-content: space-around;
                     `}
                     myStyle={``}
                 />
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 4;
`

