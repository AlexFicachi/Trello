import React, {useContext} from 'react'
import styled from 'styled-components';
import {Button} from '../../shared/Button'
import {Context} from '../../../Context'; 

export const DeleteCardButton = () => {
    const myContext = useContext(Context);
    const color = myContext.theme.color.deleteButton;
    const hover = myContext.theme.color.deleteButtonHover;
    const {cardIndex} = myContext;
    const {columnIndex} = myContext;
    const {deleteCard} = myContext.functions;
    console.log(myContext)
    return (
        <Wrapper
            onClick={()=>deleteCard(cardIndex, columnIndex)}
        >
            <Button
                text={'Delete'}
                myStyle={`
                    padding-left: 24px;
                    padding-right: 24px;
                    background: ${color};
                    &:hover{
                        background: ${hover};
                    }
                `}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    
`