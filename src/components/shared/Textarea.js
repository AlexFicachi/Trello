import React, {useEffect, useRef, useState, useContext} from 'react'
import styled from 'styled-components';
import {Context} from '../../Context';

export const Textarea = ({value, placeholder}) => {
    let myContext = useContext(Context)
    let color = myContext.theme.color.columnText;

    let myRef = useRef();
    let [scrollHeight, setScrollHeight] = useState();

    useEffect(()=>{
        setScrollHeight(myRef.current.scrollHeight);
    },[])
    
    return (
        <Wrapper>
            <StyledTextarea 
                value={value}
                ref={myRef}
                height={scrollHeight}
                color={color}
                placeholder={placeholder}
            />
        </Wrapper>
    )
}

let Wrapper = styled.div`
    padding: 7px;
    padding-top: 5px;
    background: white;
    border-radius: 3px;
`

let StyledTextarea = styled.textarea`
    width: 100%;
    height: ${({height})=>height}px;
    resize: none;
    border-radius: 3px;
    font-size: 1em;
    border: 0px;
    line-height: 1.5em;
    color: ${({color})=>color};
    &::placeholder{
        color: ${({color})=>color};
        opacity: 0.8;
    }
`
