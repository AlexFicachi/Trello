import React, {useState, useEffect} from 'react';
import './App.css';
import {Header} from './components/Header';
import {Board} from './components/Board';
import {Context} from './Context';
import {v4} from 'uuid';
import {useDragnDrop} from './components/useDragnDrop';


function App() {
  /*  TODO
        Add inverse dataflow
  */
  const [state, setState] = useState(
    [
      {
        name: 'Requested',
        columnTitleInput: false,
        addCardInput: false,
        id: v4(),
        cards: [
          {
            name: 'Lorem ipsum dolor sit amet',
            id: v4(),
            editCardInput: false,
          },
        ],
      },
      {
        name: 'In Progress',
        columnTitleInput: false,
        addCardInput: false,
        id: v4(),
        cards: [
          {
            name: 'consectetur adipiscing elit',
            id: v4(),
            editCardInput: false,
          }
        ],
      },
      {
        name: 'Done',
        columnTitleInput: false,
        addCardInput: false,
        id: v4(),
        cards: [
          {
            name: 'Add columns & cards',
            id: v4(),
            editCardInput: false,
          },
          {
            name: 'delete columns and cards',
            id: v4(),
            editCardInput: false,
          },
          {
            name: 'edit column and cards',
            id: v4(),
            editCardInput: false,
          },
          {
            name: 'Drag and drop cards',
            id: v4(),
            editCardInput: false,
          },
          {
            name: 'Persist data',
            id: v4(),
            editCardInput: false,
          }
        ],
      },
    ],
  )

  useEffect(()=>{
    const data = localStorage.getItem('state');
    if (data){
      setState(JSON.parse(data));
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('state',JSON.stringify(state))
  })

  const [onDragEnd] = useDragnDrop(state, setState);

  const [inputDisplaying, setInputDisplaying] = useState(false);

  const closeAllInputs = () => {
    setInputDisplaying(false);
    let slicedState = state.slice();
    slicedState = slicedState.map(col=>{
      col.cards = col.cards.map(card=>{
        card.editCardInput = false;
        return card;
      })
      col.columnTitleInput = false;
      col.addCardInput = false;
      return col;
    })
    setState(slicedState)
  }
  const addList = (value) => {
    const slicedState = state.slice();
    slicedState.push({
      name: value,
      columnTitleInput: false,
      addCardInput: false,
      id: v4(),
      cards: [],
    });
    setState(slicedState)
  }
  const addCard = (card, columnIdx) => {
    let slicedState = state.slice();
    slicedState[columnIdx].cards.push({
      name: card,
      id: v4(),
      editCardInput: false,
    });
    setState(slicedState);
  }
  const deleteColumn = (idx) => {
    setState(state.filter((col,i)=> i !== idx))
  }
  const deleteCard = (cardIdx, columnIdx) => {
    const slicedState = state.slice();
    slicedState[columnIdx].cards = slicedState[columnIdx].cards.filter((card,i)=>i!==cardIdx);
    setState(slicedState)
  }
  const editCard = (value, columnIdx, cardIdx) => {
    const slicedState = state.slice();
    slicedState[columnIdx].cards[cardIdx].name = value;
    setState(slicedState);
    toggleEditCardInput(cardIdx, columnIdx)
  }
  const editList = (value, columnIdx) => {
    const slicedState = state.slice();
    slicedState[columnIdx].name = value;
    setState(slicedState);
    closeAllInputs();
  }
  const toggleAddCardInput = (idx) => {
    let slicedState = state.slice();
    // toggle input
    slicedState[idx].addCardInput = !slicedState[idx].addCardInput;

    // close all other add card inputs
    slicedState = slicedState.map((col, i)=>{
      if (i !== idx){
        col.addCardInput = false;
      }
      return col;
    })
    setInputDisplaying(false);
    setState(slicedState);
  }
  const toggleInputDisplaying = () => {
    closeAllInputs();
    setInputDisplaying(!inputDisplaying)
    let slicedState = state.slice()
    slicedState = slicedState.map((col)=>{
      col.addCardInput = false;
      return col;
    })
    setState(slicedState)
  }
  const toggleEditCardInput = (cardIdx, columnIdx) => {
    const slicedState = state.slice();
    slicedState[columnIdx].cards[cardIdx].editCardInput = 
    !slicedState[columnIdx].cards[cardIdx].editCardInput;
    setState(slicedState)
  }

  const toggleEditColumnInput = (columnIdx) => {
    closeAllInputs();
    let slicedState = state.slice();
    // toggle input
    slicedState[columnIdx].columnTitleInput = !slicedState[columnIdx].columnTitleInput;
    setState(slicedState);
  }


  return (
    <div className="App">
      <Context.Provider 
        value={{
          state: state,
          theme,
          inputDisplaying,
          functions: {
            onDragEnd,
            toggleAddCardInput,
            toggleInputDisplaying,
            toggleEditCardInput,
            toggleEditColumnInput,
            deleteColumn,
            deleteCard,
            addCard,
            addList,
            editCard,
            editList,
            closeAllInputs,
          }
        }}
      >
        <Header/>
        <Board/>
      </Context.Provider>
    </div>
  );
}

const theme = {
  color: {
      header: 'linear-gradient(-45deg, #0067A3,#3498db)',
      columnText: '#2c3e50', // midnight blue
      columnTextLight: '#7f8c8d', // gray
      addButton: '#27ae60', // green
      addButtonHover: '#2ecc71', // light green
      deleteButton: '#c0392b', // red
      deleteButtonHover: '#e74c3c', // light red

  }
}

export {App};
