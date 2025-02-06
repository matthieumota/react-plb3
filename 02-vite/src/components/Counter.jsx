import { useState } from 'react'

function Counter({ init, max }) {
    const [value, setValue] = useState(init || 0)

    const increment = () => {
        setValue(value => value + 1)
        setValue(value => value + 1)
        setValue(value => value + 1)
        setValue(value => value + 1)
        setValue(value => value + 1)
    }
    const decrement = () => {
        setValue(value - 1)
    }

    return (
        <div className="flex justify-center gap-4 py-8">
            <button
                className="cursor-pointer border border-gray-500 px-3"
                onClick={decrement}
                disabled={value <= 0}
            >
                -
            </button>
            <span>{value}</span>
            {(!max || value < max) &&
                <button
                    className="cursor-pointer border border-gray-500 px-3"
                    onClick={increment}
                >
                    +
                </button>
            }
        </div>
    )
}

export default Counter
