import React, {useContext} from 'react'
import styled from 'styled-components';
import {Column} from './column/Column';
import {Context} from '../Context';
import {AddAnotherList} from './AddAnotherList';
import {AddListForm} from './addlist/AddListForm';
import {DragDropContext} from 'react-beautiful-dnd';

export const Board = () => {
    const myContext = useContext(Context);
    const columns = myContext.state.map((col,i)=>{
        return (
            <Context.Provider
                value={{
                    functions: myContext.functions,
                    state: col,
                    theme: myContext.theme,
                    columnIndex: i,
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
            myStyle={`
                min-width: ${(myContext.state.length*280)+288}px;
            `}
        >
            <DragDropContext
                onDragEnd={myContext.functions.onDragEnd}
            >
                {columns}
            </DragDropContext>
            {addList}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-size: 14px;
    height: 100%;
    background: rgb(0,121,191);
    white-space: nowrap;
    margin-top: 80px;
    padding: 8px;
    display: flex;
    align-items: flex-start;
    ${({myStyle})=>myStyle}
`