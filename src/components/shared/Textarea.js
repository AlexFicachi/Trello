import React, {useEffect, useState, useContext} from 'react'
import styled from 'styled-components';
import {Context} from '../../Context';

export const Textarea = ({value, placeholder, wrapperStyle, myStyle, bind}) => {
    const myContext = useContext(Context)
    const color = myContext.theme.color.columnText;
    const textareaRef = bind.ref;
    const [scrollHeight, setScrollHeight] = useState();
    const dependency = textareaRef.current && textareaRef.current.scrollHeight;
    useEffect(()=>{
        textareaRef.current.focus();
        textareaRef.current.select();
    },[textareaRef])
    useEffect(()=>{
        setScrollHeight(textareaRef.current.scrollHeight)
    },[dependency, textareaRef])
 
    return (
        <Wrapper
            myStyle={wrapperStyle}
        >
            <StyledTextarea
                myStyle={`
                    height: ${scrollHeight}px;
                    color: ${color};
                    &::placeholder{
                        color: ${color};
                        opacity: 0.8;
                    }
                    ${myStyle}
                `} 
                value={value}
                placeholder={placeholder}
                {...bind}
            />
        </Wrapper>
    )
}
const Wrapper = styled.div`
    padding-left: 7px;
    padding-right: 7px;
    padding-top: 5px;
    padding-bottom: 7px;
    background: white;
    border-radius: 3px;
    ${({myStyle})=>myStyle}
`

const StyledTextarea = styled.textarea`
    height: 20px;
    border: 0px;
    border-radius: 3px;
    width: 100%;
    resize: none;
    font-size: 1em;
    line-height: 1.5em;
    &::placeholder{
        opacity: 0.8;
    }
    ${({myStyle})=>myStyle}
`
