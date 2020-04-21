import React from 'react'
import styled from 'styled-components'

const Icon = ({icon}) => {
    return (
        <Wrapper>
            {icon}
        </Wrapper>
    )
}

let Wrapper = styled.div`
    justify-self: end;
    align-self: flex-start;
    display: flex;
    align-items: center;
    justify-items: center;
    color: rgb(107,119,139);
    & svg{
        height: 32px;
        width: 32px;
        margin-top: -2px;
        margin-right: -2px;
    }
    & svg:hover{
        background: rgb(218,219,226);
        border-radius: 3px;
        cursor: pointer;
        color: #172b4d;
    }
`

export {Icon};

