import React from 'react'
import styled from 'styled-components';

export const Form = ({input, add, remove, buttonContainerStyle, onSubmit, myStyle}) => {
    return (
        <StyledForm
            onSubmit={onSubmit}
            myStyle={myStyle}
        >
            {input}
            <Buttons
                myStyle={buttonContainerStyle}
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
    position: relative;
    z-index: 2;
    ${({myStyle})=>myStyle}
`

const Buttons = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    align-self: end;
    ${({myStyle})=>myStyle}
`
