import { useEffect, useState } from 'react'
import Table, { SuperItem } from './Table'

function App() {
  const [items, setItems] = useState<SuperItem[]>([
    { name: 'Toto', price: 10, image: '' },
    { name: 'Toto', image: '' },
    { image: '' },
  ]);

  useEffect(() => {
    setItems([ ...items, { image: '10' } ])
  }, [])

  return (
    <>
      <Table data={items} />
    </>
  )
}

export default App
