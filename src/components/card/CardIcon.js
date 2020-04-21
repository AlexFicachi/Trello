import React, {useRef, useEffect, useState} from 'react'
import styled from 'styled-components';
import {GoPencil} from 'react-icons/go';
import {Icon} from '../shared/Icon';

export const CardIcon = () => {

    let [height, setHeight] = useState();

    let myRef = useRef()

    useEffect(()=>{
        setHeight(myRef.current.offsetHeight);
    },[]);

    return (
        <Wrapper
            ref={myRef}
            myRef={myRef}
            height={height}
        >
            <Icon
                icon={<GoPencil size={15}/>}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px 0;
    position: absolute;
    margin-top: 2px;
    margin-right: 2px;
    top: 0;
    right: 0;
    height: 89%;
    width: ${({height})=>height}px;
    border-radius: 3px;
    &:hover{
        background: rgb(218,219,226);
        & *{
            color: #172b4d;
        }
    }
`
