import React, {useContext} from 'react'
import {Context} from '../../Context';
import {SubmitButton} from './SubmitButton';
import styled from 'styled-components';

export const GreenButton = ({text, animation}) => {
    const myContext = useContext(Context);
    const color = myContext.theme.color.addButton;
    const hover = myContext.theme.color.addButtonHover;

    return (
        <Wrapper>
            <SubmitButton
                text={text}
                animation={animation}
                myStyle={`
                    background: ${color};
                    padding-left: 10px;
                    padding-right: 10px;
                    &:hover{
                        background: ${hover};
                    }
                `}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-right: 8px;
`

