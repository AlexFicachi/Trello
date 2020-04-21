import React, {useContext} from 'react'
import styled from 'styled-components';
import {Column} from './column/Column';
import {Context} from '../Context';

export const Board = () => {

    let myContext = useContext(Context);

    let columns = myContext.data.map(col=>{
        return (
            <Context.Provider
                value={col}
                key={col.id}
            >
                <Column/>
            </Context.Provider>
        );
    })

    return (
        <Wrapper
            width={myContext.data.length}
        >
            {columns}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    min-width: ${props=>(props.width*280)+8}px;
    height: 100%;
    background: rgb(0,121,191);
    white-space: nowrap;
    margin-top: 80px;
    padding: 8px;
`