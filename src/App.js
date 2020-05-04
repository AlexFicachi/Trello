import React, {useState, useEffect} from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Board} from './components/Board';
import {Context} from './Context';
import {v4} from 'uuid';
import {useDragnDrop} from './components/useDragnDrop';
import {sampleData} from './sampleData.js';



function App() {
  const [state, setState] = useState(sampleData)
  const [onDragEnd] = useDragnDrop(state, setState);
  const [inputDisplaying, setInputDisplaying] = useState(false);

  useEffect(()=>{
    const data = localStorage.getItem('state');
    if (data){
      setState(JSON.parse(data));
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('state',JSON.stringify(state))
  })

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
      header: '#0268A3',
      columnText: '#2c3e50', // midnight blue
      columnTextLight: '#7f8c8d', // gray
      addButton: '#27ae60', // green
      addButtonHover: '#2ecc71', // light green
      deleteButton: '#c0392b', // red
      deleteButtonHover: '#e74c3c', // light red

  }
}

export {App};
