import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './componentes/pages/Home';
import Contato from './componentes/pages/Contato';
import NewProject from './componentes/pages/NewProject';
import Projetos from './componentes/pages/Projetos';
import Projeto from './componentes/pages/Projeto';

import Container from './componentes/layout/Container';
import Navbar from './componentes/layout/Navbar';
import Footer from './componentes/layout/Footer';

function App() {
  
  return (
  <Router>
    <Navbar/>
    <Container customClass="minHeight">
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/contato" element={<Contato/>}/>

        <Route path="/newproject" element={<NewProject/>}/>

        <Route path="/projetos" element={<Projetos/>}/>

        <Route path="/projeto/:id" element={<Projeto/>}/>
      
      </Routes>
    </Container>
    <Footer/>
  </Router> 
  
  )
}

export default App;