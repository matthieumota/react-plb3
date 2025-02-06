import { useEffect, useState } from 'react'
import axios from 'axios'

function Ajax() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            console.log('APRES LA RESPONSE', response)
            setUsers(response.data)
        })

        console.log('AVANT LA REPONSE')
    }, [])

    return (
        <ul>
            {users.map(user =>
                <li key={user.id}>
                    {user.name}
                </li>
            )}
        </ul>
    )
}

export default Ajax
