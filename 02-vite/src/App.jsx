import './App.css'
import Button from './Button'
import Counter from './components/Counter'
import List from './components/List'
import Wording from './components/Wording'

function App() {
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
    </>
  )
}

export default App
