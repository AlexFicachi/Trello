import React from 'react'
import styled from 'styled-components';

export const Form = ({input, add, remove, justify}) => {
    return (
        <StyledForm>
            {input}
            <Buttons
                justify={justify}
            >
                {add}
                {remove}
            </Buttons>
        </StyledForm>
    )
}

const StyledForm = styled.form`
    display: grid;
    height: 100%;
    grid-template-rows: repeat(2, auto);
`

const Buttons = styled.div`
    justify-content: ${({justify})=>justify};
    display: flex;
    align-items: center;
    width: 100%;
    align-self: end;
`
