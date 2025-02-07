import { useSelector } from 'react-redux'
import { NavLink, NavLinkProps, NavLinkRenderProps } from 'react-router'

function MenuLink({ children, to }: NavLinkProps) {
  return (
    <NavLink to={to}
      className={({ isActive }: NavLinkRenderProps) =>
        `px-3 py-3 inline-block duration-200 hover:text-white hover:bg-slate-800 ${isActive ? 'text-white bg-slate-800' : ''}`
      }
    >
      {({ isActive }) => isActive ? <>👉 {children}</> : <>{children}</>}
    </NavLink>
  )
}

function Header() {
  const todos = useSelector((state: any) => state.todo)

  return (
    <div className="max-w-screen-lg mx-auto flex items-center justify-between">
      <nav>
        <MenuLink to="/">Accueil</MenuLink>
        <MenuLink to="/admin">Admin</MenuLink>
      </nav>

      <p>{todos.length} todos</p>
    </div>
  )
}

export default Header
