import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, toggleTodo } from '../store'
import TodoForm from '../components/TodoForm'

function Home() {
  const todos = useSelector((state: any) => state.todo)
  const dispatch = useDispatch()

  return (
    <>
      <h1 className="text-2xl text-center font-bold">Accueil</h1>
      <ul>
        {todos.map((todo: any) =>
          <li key={todo.id}>
            <input type="checkbox" checked={todo.done} onChange={() => dispatch(toggleTodo(todo.id))} />
            {todo.name}
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Supprimer</button>
          </li>
        )}
      </ul>
      <TodoForm />
    </>
  )
}

export default Home
