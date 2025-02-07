import { useMemo } from 'react'
import { useLocation } from 'react-router'

type FooterProps = {
  title: string
}

function Footer({ title }: FooterProps) {
  const year = useMemo(() => new Date().getFullYear(), [])
  const location = useLocation()
  const routeActive = useMemo(() => location.pathname, [location.pathname])

  return (
    <footer className="max-w-screen-lg mx-auto">
      <p className="text-center">
        {title} - Copyright {year}
      </p>
      <p className="text-center text-sm">Vous êtes sur <code>{routeActive}</code></p>
    </footer>
  )
}

export default Footer
