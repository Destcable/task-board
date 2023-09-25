import React from 'react'
import ReactDOM from 'react-dom/client'
import TaskBoard from './pages/TaskBoard'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TaskBoard 
      percentage={60}
    />
  </React.StrictMode>,
)
