import React, {useContext} from 'react'
import styled from 'styled-components';
import {SubmitButton} from '../../shared/SubmitButton'
import {Context} from '../../../Context';
export const SaveCardButton = () => {
    const myContext = useContext(Context);
    const color = myContext.theme.color.addButton;
    const hover = myContext.theme.color.addButtonHover;
    return (
        <Wrapper>
            <SubmitButton
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