import React, {useContext} from 'react';
import styled from 'styled-components';
import {ColumnHeader} from './ColumnHeader';
import {ColumnMain} from './ColumnMain';
import {ColumnFoot} from './ColumnFoot';
import {Context} from '../../Context';
import {Droppable} from 'react-beautiful-dnd';

export const Column = () => {
    const myContext = useContext(Context);
    const color = myContext.theme.color.columnText

    return (

        <Wrapper 
            myStyle={`
                color: ${color};
            `}
        >
            <ColumnHeader/>
            <Droppable
                droppableId={myContext.state.id}
            >
                {(provided)=>
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <ColumnMain/>
                        {provided.placeholder}
                        <ColumnFoot/>
                    </div>
                }
            </Droppable>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    min-width: 272px;
    width: 1px;
    background: rgb(235,236,240);
    border-radius: 3px;
    display: inline-block;
    margin-right: 8px;
    padding: 5px;
    padding-right: 8px;
    padding-left: 8px;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 100px;
    ${({myStyle})=>myStyle}
`
