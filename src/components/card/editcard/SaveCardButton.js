import React, {useContext} from 'react'
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
                myStyle={`
                    background: ${color};
                    padding-left: 24px;
                    padding-right: 24px;
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