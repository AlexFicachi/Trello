import React, {useRef, useContext} from 'react'
import styled from 'styled-components';
import {Button} from '../shared/Button'
import {Context} from '../../Context';
export const AddCardButton = () => {
    const myContext = useContext(Context);
    const color = myContext.theme.color.addButton;
    const hover = myContext.theme.color.addButtonHover;
    return (
        <Wrapper>
            <Button
                text={'Add Card'}
                color={color}
                hover={hover}
                width={10}
            />
        </Wrapper>
    )
}

let Wrapper = styled.div`
    display: inline-block;
    margin-right: 8px;
`