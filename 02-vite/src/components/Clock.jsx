import { useEffect, useRef, useState } from 'react'

function Clock({ tz }) {
    const [date, setDate] = useState(new Date())

    // Logique de construction (mount)
    useEffect(() => {
        const i = setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000)

        return () => { // Logique de destruction (unmount)
            clearInterval(i)
        }
    }, []) // 1 seule fois au montage du composant

    const oldTz = useRef(tz) // useRef est un useState mais sans la partie render (optimisation)
    useEffect(() => { // Logique quand tz est update
        if (oldTz.current !== tz) { // Vérif nécessaire car le useEffect est fait au départ
            // alert('Le timezone a changé ! ' + tz)
        }

        return () => {
            // alert('AVANT ' + tz)
            oldTz.current = tz
        }
    }, [tz])

    return (
        <h1>{date.toLocaleTimeString(undefined, { timeZone: tz })} à {tz}</h1>
    )
}

export default Clock
