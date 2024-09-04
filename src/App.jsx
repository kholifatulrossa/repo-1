import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Pages/Login'
import routes from './Router/RouteList'
import { RouterProvider } from 'react-router-dom'
import '@fontsource/poppins'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
