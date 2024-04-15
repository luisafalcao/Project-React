import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown, faChevronUp, faHouse, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-modal';
import './App.css'

import Layout from './pages/Layout';
import Home from './pages/Home';
import Idioma from './pages/Idioma';
import Gramatica from './components/gramatica/Gramatica'
import Vocabulario from './components/vocabulario/Vocabulario'
import Verbos from './components/verbos/Verbos'

library.add(faChevronDown, faChevronUp, faHouse, faPlus, faMinus)
Modal.setAppElement('#root');

function App() {
  useEffect(() => {
    document.title = "Idiomas"
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/idioma/:id" element={<Idioma />} >
              <Route path="gramatica" element={<Gramatica />} />
              <Route path="vocabulario" element={<Vocabulario />} />
              <Route path="verbos" element={<Verbos />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
