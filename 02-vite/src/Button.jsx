import { useState } from 'react'

function Button({ children, onClick, ...props }) {
  const [count, setCount] = useState(0)

  return (
    <button
      className="bg-blue-500 px-3 py-2 text-white rounded-lg cursor-pointer hover:bg-blue-600 duration-200 disabled:bg-blue-200 disabled:cursor-auto"
      onClick={() => {
        setCount(count + 1)
        onClick && onClick()
      }}
      {...props}
    >
      {children} {count}
    </button>
  )
}

export default Button
