import { useState } from 'react'
import Button from '../Button'

function Wording({ title }) {
    const [name, setName] = useState('John')

    return (
        <>
            <h2 className="text-2xl font-bold">{title}</h2>
            {name && <p>{name}</p>}
            {!name && <p className="text-red-500">Veuillez saisir un nom</p>}
            <input
                type="text"
                className="border border-gray-300 rounded px-2 py-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <div>
                <Button onClick={() => setName('Fiorella')}>Fiorella</Button>
                <Button onClick={() => setName('')} disabled={!name}>Supprimer</Button>
            </div>
        </>
    )
}

export default Wording
