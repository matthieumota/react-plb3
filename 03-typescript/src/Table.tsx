import { JSX } from 'react'

type Item = {
  name: string
  price?: number
}

// Créer un superitem qui est un item avec une image
type SuperItem = Partial<Item> & {
  image: string
}

type TableProps = {
  data: SuperItem[]
}

function Table({ data }: TableProps): JSX.Element {
  return (
    <>
      {data.map(v =>
        <li>{v.name} {v.price} {v.image}</li>
      )}
    </>
  )
}

export default Table
