import React, {useContext} from 'react'
import {Context} from '../../Context';
import {Button} from './Button';
import styled from 'styled-components';

export const GreenButton = ({text, animation}) => {
    const myContext = useContext(Context);
    const color = myContext.theme.color.addButton;
    const hover = myContext.theme.color.addButtonHover;

    return (
        <Wrapper>
            <Button
                color={color}
                hover={hover}
                width={10}
                text={text}
                animation={animation}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-right: 8px;
`

