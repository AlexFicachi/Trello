import React, {useEffect, useRef, useState, useContext} from 'react'
import styled from 'styled-components';
import {Context} from '../../Context';

export const Textarea = ({value, placeholder, paddingBottom, paddingTop, paddingLeft, paddingRight, bold}) => {
    let myContext = useContext(Context)
    let color = myContext.theme.color.columnText;

    let myRef = useRef();
    let [scrollHeight, setScrollHeight] = useState();

    useEffect(()=>{
        setScrollHeight(myRef.current.scrollHeight);
    },[])
    
    return (
        <Wrapper
            paddingBottom={paddingBottom}
            paddingTop={paddingTop}
            paddingLeft={paddingLeft}
            paddingRight={paddingRight}
        >
            <StyledTextarea 
                value={value}
                ref={myRef}
                height={scrollHeight}
                color={color}
                placeholder={placeholder}
                bold={bold}
            />
        </Wrapper>
    )
}
let Wrapper = styled.div`
    padding-left: ${({paddingLeft})=>paddingLeft || '7px'};
    padding-right: ${({paddingRight})=>paddingRight || '7px'};
    padding-top: ${({paddingTop})=>paddingTop || '5px'};
    padding-bottom:${({paddingBottom})=>paddingBottom || '7px'};
    background: white;
    border-radius: 3px;
`

let StyledTextarea = styled.textarea`
    font-weight: ${({bold})=>bold && '600'};
    height: ${({height})=>height || '20'}px;
    color: ${({color})=>color};
    border: 0px;
    border-radius: 3px;
    width: 100%;
    resize: none;
    font-size: 1em;
    line-height: 1.5em;
    &::placeholder{
        color: ${({color})=>color};
        opacity: 0.8;
    }
`
