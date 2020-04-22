import React, {useContext} from 'react'
import styled from 'styled-components';
import {Column} from './column/Column';
import {Context} from '../Context';
import {AddAnotherList} from './AddAnotherList';
import {AddListForm} from './addlist/AddListForm';

export const Board = () => {

    const myContext = useContext(Context);

    const columns = myContext.state.columns.map(col=>{
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

    const addList = myContext.inputDisplaying ? <AddListForm/> : <AddAnotherList/>;

    return (
        <Wrapper
            width={myContext.state.columns.length}
        >
            {columns}
            {addList}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-size: 14px;
    min-width: ${({width})=>(width*280)+288}px;
    height: 100%;
    background: rgb(0,121,191);
    white-space: nowrap;
    margin-top: 80px;
    padding: 8px;
    display: flex;
    align-items: flex-start;
`