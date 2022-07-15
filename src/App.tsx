import Menu from './layout/Menu'
import './App.css'
import { Footer } from './layout/footer'
import {Route, Routes} from 'react-router-dom'
import { Home } from './pages/Home'

function App() {


  return (
   <div>
     <Menu />
     <div className='container'>
        <Routes>
          <Route path="/" element = {<Home /> } />
        </Routes>
     </div>
     aqui é meu conteudo
     <Footer />
   </div>
  )
}

export default App
