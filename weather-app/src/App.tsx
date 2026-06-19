    import {  Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom'
    import Dashboard from './components/Dashboard'
    const router = createBrowserRouter([
      {
        path:'/',
        element:<Dashboard/>
      }
    ])
    function App() {
      return (
        <div>
         <Dashboard/>
        </div>
          
        
      )
    }

    export default App