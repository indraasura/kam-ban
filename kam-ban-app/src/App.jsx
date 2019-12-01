import React from 'react'
import KanbanBoard from './components/KanbanBoard'
import './App.css'

let cardsList = [
    {
        id: 1,
        title: "Read the book",
        description: " I should read the whole book",
        status: "in-progress",
        tasks: []
    },
    {
        id: 2,
        title: "Write some code",
        description: " Code along the tutorial ",
        status: "to-do",
        tasks: [
            {
                id: 1,
                name: "ContactList Example",
                done: true
            },
            {
                id: 2,
                name: "Kanban example",
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

const App = () => <KanbanBoard cards={cardsList} />

export default App