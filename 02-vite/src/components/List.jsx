import { useState } from 'react'

let nextId = 4

function List() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Toto', avatar: 'https://i.pravatar.cc/150?u=Toto' },
    { id: 2, name: 'Titi', avatar: 'https://i.pravatar.cc/150?u=Titi' },
    { id: 3, name: 'Tata', avatar: 'https://i.pravatar.cc/150?u=Tata' },
  ])
  const [newUser, setNewUser] = useState({
    id: null,
    name: '',
    avatar: false,
  })

  const handleAdd = () => {
    //const newUser = { id: nextId++, name: 'Tutu', avatar: 'https://i.pravatar.cc/150?u=Tutu' }
    setUsers([
      ...users,
      { ...newUser, id: nextId++, avatar: newUser.avatar ? `https://i.pravatar.cc/150?u=${newUser.name}` : '' }
    ])
    setNewUser({ id: null, name: '', avatar: false })
  }

  const handleEdit = (id) => {
    // Alternative
    // const user = users.find(user => user.id === id)
    // if (user.name === user.name.toUpperCase()) {
    //   user.name = user.name.toLowerCase()
    // } else {
    //   user.name = user.name.toUpperCase()
    // }
    // setUsers([...users])

    setUsers(users.map(user => {
      if (user.id === id) {
        let newName = user.name.toUpperCase()
        if (newName === user.name) {
          newName = user.name.toLowerCase()
        }

        return { ...user, name: newName }
      }

      return user
    }))
  }

  const handleRemove = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }

  const handleChange = (value, field) => {
    // console.log(field, value)
    setNewUser({ ...newUser, [field]: value })
  }

  return (
    <>
      <ul className="space-y-8">
        {users.map(user =>
          <li key={user.id} className="flex items-center justify-center gap-8">
            <img src={user.avatar} alt={user.name} className="w-30 h-30 rounded-full" />
            <h2 className="text-2xl font-bold" onDoubleClick={() => handleEdit(user.id)}>
              {user.name}
            </h2>
            <button
              className="cursor-pointer bg-red-500 px-3 py-2 text-white rounded-lg"
              onClick={() => handleRemove(user.id)}
            >
              X
            </button>
          </li>
        )}
      </ul>
      {JSON.stringify(newUser)}
      <input type="text" value={newUser.name} onChange={(e) => handleChange(e.target.value, 'name')} className="border" />
      <input type="checkbox" checked={newUser.avatar} onChange={(e) => handleChange(e.target.checked, 'avatar')} />
      <button
        className="cursor-pointer bg-blue-500 px-3 py-2 text-white rounded-lg"
        onClick={handleAdd}
      >
        Ajouter
      </button>
    </>
  )
}

export default List
