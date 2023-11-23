import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home';
import Accueil from './routes/Accueil';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Accueil />
  },
  {
    path: '/home',
    element: <Home />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
