import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cabecalho from "./componentes/Cabecalho";
import Rodape from "./componentes/Rodape";
import Usuarios from "./componentes/Usuarios";
import Home from "./componentes/Home";
import CadastrarUsuario from "./componentes/CadastrarUsuario";
import CadastrarCompetencia from "./componentes/CadastrarCompetencia";
import Competencias from "./componentes/Competencias";
import EditarCompetencia from "./componentes/EditarCompetencia";
import AtribuirUsuarioCompetencia from "./componentes/AtribuirUsuarioCompetencia";
import AtribuirUsuario from "./componentes/AtribuirUsuario";

function App() {
  return (
    <div className="aplicacao">
      <BrowserRouter>
        <Cabecalho />
        <Routes>
          <Route exact path="/">
            <Route index element={<Home />}></Route>
            <Route path="usuarios" element={<Usuarios/>}></Route>
            <Route path="competencias" element={<Competencias/>}></Route>
            <Route path="cadastrarUsuario" element={<CadastrarUsuario/>}></Route>
            <Route path="cadastrarCompetencia" element={<CadastrarCompetencia/>}></Route>
            <Route path="editarCompetencia/:id" element={<EditarCompetencia/>}></Route>
            <Route path="atribuirUsuarioCompetencia/:id" element={<AtribuirUsuarioCompetencia/>}></Route>
            <Route path="atribuirUsuario/:idUsuario/:idCompetencia" element={<AtribuirUsuario/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Rodape />
    </div>
  );
}

export default App;
