import Table from './Table'

function App() {
  return (
    <>
      <Table data={[
        { name: 'Toto', price: 10, image: '' },
        { name: 'Toto', image: '' },
        { image: '' },
      ]} />
    </>
  )
}

export default App
