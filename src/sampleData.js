import {v4} from 'uuid';

const sampleData =
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
          editCardInput: false
        }
      ]
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
          editCardInput: false
        }
      ]
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
          editCardInput: false
        },
        {
          name: 'delete columns and cards',
          id: v4(),
          editCardInput: false
        },
        {
          name: 'edit column and cards',
          id: v4(),
          editCardInput: false
        },
        {
          name: 'Drag and drop cards',
          id: v4(),
          editCardInput: false
        },
        {
          name: 'Persist data',
          id: v4(),
          editCardInput: false
        }
      ]
    }
  ]

export {sampleData}