import React, {useContext} from 'react';
import styled from 'styled-components';
import {EditCardInput} from './EditCardInput';
import {SaveCardButton} from './SaveCardButton';
import {DeleteCardButton} from './DeleteCardButton';
import {Form} from '../../shared/Form';
import {Context} from '../../../Context';

export const EditCard = () => {
    const myContext = useContext(Context);
    const {toggleEditCardInput} = myContext.functions;
    const {columnIndex} = myContext;
    const {cardIndex} = myContext;
    console.log(myContext);

    return (
        <>
            <Background
                onClick={()=>toggleEditCardInput(cardIndex,columnIndex)}
            />
            <Wrapper>
                 <Form
                     input={<EditCardInput/>}
                     add={<SaveCardButton/>}
                     remove={<DeleteCardButton/>}
                     buttonContainerStyle={`
                        justify-content: space-around;
                     `}
                 />
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2;
`

const Background = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    background: rgba(0,0,0,0.5);
    top: 0;
    left: 0;
    z-index: 1;
`
