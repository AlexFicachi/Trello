const useDragnDrop = (state, setState) => {
    let slicedState = state.slice();

    const onDragEnd = (result) =>{
        // if card dropped in non droppable area
        if (!result.destination){
            return;
        }
        // helper functions
        const getListIndex = (id) => slicedState.findIndex(col=>col.id===id);
        const getCard = (cardId, listIndex) => {
            return slicedState[listIndex].cards.find(card=>card.id===cardId);
        }
        // get indexes & card
        const fromCardIdx = result.source.index;
        const toCardIdx = result.destination.index;
        const fromListIdx = getListIndex(result.source.droppableId);
        const toListIdx = getListIndex(result.destination.droppableId);
        const card = getCard(result.draggableId, fromListIdx);
        // reorder state
        slicedState[fromListIdx].cards.splice(fromCardIdx, 1);
        slicedState[toListIdx].cards.splice(toCardIdx,0,card)
        setState(slicedState)
    }

    return [onDragEnd]
}

export {useDragnDrop};