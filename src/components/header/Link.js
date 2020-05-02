import React from 'react'
import styled from 'styled-components';

export const Link = ({text, icon, link, code}) => {
    const tex = code ? <Code>{text}</Code> : <Text>{text}</Text>
    return (
        <Handle>
            {tex}
                <A
                    href={link}
                    target="_blank"
                >
                    <In>
                        {icon}
                    </In>
                </A>
        </Handle>
    )
}

const Handle = styled.div`
    justify-self: center;
    display: grid;
    justify-items: center;
    grid-template-rows: 40px 40px;
`

const A = styled.a`
    color: white;
`

const Text = styled.div`
    align-self: center;
    color: white;
    font-weight: 450;
    text-align: center;
    width: 100px;
`
const Code = styled.code`
    align-self: center;
    color: white;
    font-weight: 450;
    text-align: center;
    width: 100px;
    white-space: nowrap;
`

const In = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    cursor: pointer;
    transition: 0.4s;
    width: 0px;
    padding-top: 5px;
    border-top: 1px solid white;
    margin-top: -10px;
    &:hover{
        font-size: 40px;
        width: 90px;
    }
`

