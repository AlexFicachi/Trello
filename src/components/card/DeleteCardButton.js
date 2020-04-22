import React, {useRef, useContext} from 'react'
import styled from 'styled-components';
import {Button} from '../shared/Button'
import {Context} from '../../Context';

export const DeleteCardButton = () => {
    const myContext = useContext(Context);
    const color = myContext.theme.color.deleteButton;
    const hover = myContext.theme.color.deleteButtonHover;
    return (
        <Wrapper>
            <Button
                text={'Delete'}
                color={color}
                hover={hover}
                width={24}
            />
        </Wrapper>
    )
}

let Wrapper = styled.div`
    
`