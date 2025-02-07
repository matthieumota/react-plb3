import { useEffect, useState } from 'react'
import Table, { SuperItem } from './Table'
import { Outlet } from 'react-router'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [items, setItems] = useState<SuperItem[]>([
    { name: 'Toto', price: 10, image: '' },
    { name: 'Toto', image: '' },
    { image: '' },
  ]);

  useEffect(() => {
    setItems([ ...items, { image: '10' } ])
  }, [])

  const [title, setTitle] = useState('Mon App React')

  return (
    <>
      {/*<Table data={items} />*/}
      <Header />

      <div className="max-w-screen-lg mx-auto py-16">
        <Outlet />
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      {/*
        Dans le composant Footer, on veut un titre en props (typé)
        Dans ce même composant, on affichera l'année actuelle en dynamique (typescript)
        Essayer d'afficher le nom de la route active (hook comme useState ?)
      */}
      <Footer title={title} />
    </>
  )
}

export default App
