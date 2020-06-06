import React from 'react'
import KanbanBoard from './components/KanbanBoard'

let cardList = [
  {
    id: 1,
    title: 'Read the book',
    description: 'I should read the whole book',
    status: 'in-progress',
    tasks:[]
  },
  {
    id: 1,
    title: 'Write some code',
    description: 'Code along the samples given in the book',
    status: 'todo',
    tasks:[
      {
        id: 1,
        name: "ContactList Example",
        done: true
      },
      {
        id: 2,
        name: "Kanban Example",
        done: false
      },
      {
        id: 3,
        name: "My own experiments",
        done: false
      }
    ]
  },

]

const App = () => <KanbanBoard cards={ cardList }/>

export default App