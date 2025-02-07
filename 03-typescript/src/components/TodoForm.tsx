import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store'

function TodoForm() {
  const [todo, setTodo] = useState({ name: '' })
  const dispatch = useDispatch()

  const handleAdd = (e: FormEvent) => {
    e.preventDefault()
    dispatch(addTodo(todo))
    setTodo({ name: '' })
  }

  return (
    <form onSubmit={handleAdd} className="flex gap-3">
      <input
        type="text"
        value={todo.name}
        onChange={(e) => setTodo({ ...todo, name: e.target.value })}
        className="border border-gray-300 p-2 rounded-lg"
      />
      <button disabled={!todo.name} className="bg-amber-400 text-gray-100 px-3 py-2 rounded-lg">Ajouter</button>
    </form>
  )
}

export default TodoForm
