import { useState } from 'react'
import './App.css'
import Button from './Button'
import Clock from './components/Clock'
import Counter from './components/Counter'
import List from './components/List'
import Wording from './components/Wording'
import Ajax from './components/Ajax'
import EventListener3 from './exercices/EventListener3'
import EventListener4 from './exercices/EventListener4'
import LifecycleChallenge from './exercices/LifecycleChallenge'
import Ajax2 from './exercices/Ajax2'

function App() {
  const [showClock, setShowClock] = useState(true)
  const [timezone, setTimezone] = useState('Asia/Tokyo')

  return (
    <>
      <Ajax />
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

      <EventListener3 />
      <EventListener4 />
      <LifecycleChallenge />
      <Ajax2 />
    </>
  )
}

export default App
