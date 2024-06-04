import { useState } from "react"

export function TodoForm({ addTodo }) {

    const [value, setValue] = useState('')
    const [category, setCategory] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(value, category)

        if(!value || !category) {
            alert('A task precisa de um título e uma categoria!')
            return;
        }     
        addTodo(value, category) 
        setValue('')
        setCategory('')
    }

    return (
        <div className="todo_form">
            <h3>Criar task:</h3>

            <form onSubmit={handleSubmit}>
                <input 
                    value={value}
                    type="text" 
                    placeholder="Digite o título" 
                    onChange={(event) => setValue(event.target.value)}
                />
                <select value={category} onChange={(event) => setCategory(event.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button>Criar tarefa</button>
            </form>
        </div>
    )
}