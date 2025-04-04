import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import App from './App.jsx'
import Quiz from './components/Quiz.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path = "/" element = {<App />} />
        <Route path = "/quiz" element = {<Quiz />} />
      </Routes>
    </Router>
  </StrictMode>,
)
