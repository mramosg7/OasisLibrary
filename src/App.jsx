import Home from "./pages/home"
import { BookProvider } from "./context/BookContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetallesLibro from './componentes/detallesLibro';
function App() {


  return (
    <BookProvider>
      <Router>
        <Routes>
         
            <Route path="/" element={<Home/>}/>
        
            <Route path="/book/:id" element={<DetallesLibro/>} />
          
        </Routes>
      </Router>
      </BookProvider>
  )
}

export default App
