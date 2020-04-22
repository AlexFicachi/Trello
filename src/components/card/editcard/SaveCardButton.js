import React, {useRef, useContext} from 'react'
import styled from 'styled-components';
import {Button} from '../../shared/Button'
import {Context} from '../../../Context';
export const SaveCardButton = () => {
    const myContext = useContext(Context);
    const color = myContext.theme.color.addButton;
    const hover = myContext.theme.color.addButtonHover;
    return (
        <Wrapper>
            <Button
                text={'Save'}
                color={color}
                hover={hover}
                width={24}
            />
        </Wrapper>
    )
}

let Wrapper = styled.div`
    
`