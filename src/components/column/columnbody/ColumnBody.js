import React, {useContext} from 'react';
import styled from 'styled-components';
import {ColumnCards} from './ColumnCards';
import {Droppable} from 'react-beautiful-dnd';
import {Context} from '../../../Context';
import {ColumnFoot} from './ColumnFoot';

export const ColumnBody = () => {
    const myContext = useContext(Context);
    return (
        <Droppable
            droppableId={myContext.state.id}
        >
            {(provided)=>
                <React.Fragment>
                    <Wrapper
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <ColumnCards/>
                        {provided.placeholder}
                    </Wrapper>
                    <ColumnFoot/>
                </React.Fragment>
            }
        </Droppable>
    )
};

const Wrapper = styled.div`
    overflow-y: scroll;
`