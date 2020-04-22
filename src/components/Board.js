import React, {useContext} from 'react'
import styled from 'styled-components';
import {Column} from './column/Column';
import {Context} from '../Context';
import {AddAnotherList} from './AddAnotherList';

export const Board = () => {

    let myContext = useContext(Context);

    let columns = myContext.state.map(col=>{
        return (
            <Context.Provider
                value={{
                    state: col,
                    theme: myContext.theme
                }}
                key={col.id}
            >
                <Column/>
            </Context.Provider>
        );
    })

    return (
        <Wrapper
            width={myContext.state.length}
        >
            {columns}
            <AddAnotherList/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-size: 14px;
    min-width: ${props=>(props.width*280)+288}px;
    height: 100%;
    background: rgb(0,121,191);
    white-space: nowrap;
    margin-top: 80px;
    padding: 8px;
    display: flex;
    align-items: flex-start;
`