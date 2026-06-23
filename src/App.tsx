import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './components/pages/Home'
import HistoryPage from './components/pages/HistoryPage'
import SettingPage from './components/pages/SettingPage'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        
        element: <Home />,
      },
      {
        path:"/history",
        element:<HistoryPage/>
      },
      {
        path: "/setting",
        element: <SettingPage />,
      },
      // {
      //   path: "history",
      //   element: <History />,
      // },
    ],

  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App