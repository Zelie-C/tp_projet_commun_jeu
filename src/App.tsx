import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home';
import Accueil from './routes/Accueil';
import Resultats from './routes/Resultats';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Accueil />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/results/:tata',
    element: <Resultats />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
