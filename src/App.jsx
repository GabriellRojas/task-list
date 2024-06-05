import { useState } from 'react'
import './App.css'

import { Todo } from './components/Todo'
import { TodoForm } from './components/TodoForm'
import { Footer } from './components/Footer'
import { Search } from './components/Search'
import { Filter } from './components/Fiter'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x no sistema",
      category: "trabalho",
      idCompleted: false
    },
    {
      id: 2,
      text: "Ir para academia",
      category: "pessoal",
      idCompleted: false
    },
    {
      id: 3,
      text: "Estudar React",
      category: "estudos",
      idCompleted: false
    }
  ])

  const [search, setSearch] = useState('')

  const [filter, setFilter] = useState('all')
  const [sort, setSort] = useState('Asc')

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos, 
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        idCompleted: false
      }
    ]
    setTodos(newTodos)
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) => 
      todo.id !== id ? todo : null
    )
    setTodos(filteredTodos)
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => 
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    )
    setTodos(newTodos)
  }

  return (
    <div className='app'>
      <header></header>
      <div className='container'>
          <h1>Lista de tasks</h1>
          <Search search={search} setSearch={setSearch}/>
          <Filter filter={filter} setFilter={setFilter} setSort={setSort} />

          <div className="todo_list">
            {todos
              .filter((todo) => filter === "all" 
              ? true 
              : filter === "completed" 
              ? todo.isCompleted 
              : !todo.isCompleted
            )
              .filter((todo) => 
                todo.text.toLowerCase().includes(search.toLocaleLowerCase()))
              .sort((a, b)  => 
                sort === "Asc"
                  ? a.text.localeCompare(b.text) 
                  : b.text.localeCompare(a.text)
              )
              .map((todo) => (
                <Todo todo={todo} key={todo.id} removeTodo={removeTodo} completeTodo={completeTodo}/>
              ))}
          </div>
          <TodoForm addTodo={addTodo}/>
      </div>
      <Footer />
      <div/> 
    </div>
  )
}

export default App