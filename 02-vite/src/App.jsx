import { useState } from 'react'
import './App.css'
import Button from './Button'
import Clock from './components/Clock'
import Counter from './components/Counter'
import List from './components/List'
import Wording from './components/Wording'

function App() {
  const [showClock, setShowClock] = useState(true)
  const [timezone, setTimezone] = useState('Asia/Tokyo')

  return (
    <>
      <Button>
        Contactez nous
      </Button>
      <Wording title="Ma box" />

      <Counter />
      <Counter init={10} />
      <Counter max={10} />
      <Counter init={5} max={10} />

      <List />

      <div>
        <Button onClick={() => setShowClock(!showClock)}>Afficher/cacher</Button>
        {showClock && <Clock tz={timezone} />}
        <Button onClick={() => setTimezone('Europe/Paris')}>Paris</Button>
        <Button onClick={() => setTimezone('Asia/Tokyo')}>Tokyo</Button>
      </div>
    </>
  )
}

export default App
