import React, {useContext} from 'react'
import styled from 'styled-components';
import {Button} from '../../shared/Button'
import {Context} from '../../../Context'; 

export const DeleteCardButton = () => {
    const myContext = useContext(Context);
    const color = myContext.theme.color.deleteButton;
    const hover = myContext.theme.color.deleteButtonHover;
    return (
        <Wrapper>
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