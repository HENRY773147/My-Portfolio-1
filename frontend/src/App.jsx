import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import PortfolioWebsite from './components/PortfolioWebsite'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<PortfolioWebsite />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App