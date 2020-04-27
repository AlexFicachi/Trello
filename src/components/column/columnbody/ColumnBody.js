import React, {useContext} from 'react';
import styled from 'styled-components';
import {ColumnCards} from './ColumnCards';
import {Droppable} from 'react-beautiful-dnd';
import {Context} from '../../../Context';

export const ColumnBody = () => {
    const myContext = useContext(Context);
    return (
        <Droppable
            droppableId={myContext.state.id}
        >
            {(provided)=>
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    <ColumnCards/>
                    {provided.placeholder}
                </div>
            }
        </Droppable>
    )
};