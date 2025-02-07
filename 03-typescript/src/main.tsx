import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home.tsx'
import Admin from './pages/Admin.tsx'
import { Provider } from 'react-redux'
import { store } from './store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="" element={<Home />} />
          </Route>

          <Route path="admin" element={<App />}>
            <Route index element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
