
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import LayoutOne from './Layouts/LayoutOne'

function App() {
  
  const myRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne/>}>
        <Route index element={<Home/>}/>
        </Route>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={myRouter}/>
    </>
  )
}

export default App
