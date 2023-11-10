import { React, useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import ListarUsuario from "./ListarUsuarios";

const BACKEND_URL = "http://localhost:3352/api";

let formulario = {competencia: '', data: '', link: 'vazio', situacao: false};

export default function EditarCompetencia() {

    const { id } = useParams();
    const [form, setForm] = useState([]);
    const [tabelaUsuarios, setTabelaUsuarios] = useState([]);
    useEffect(() => {
        axios.get(`${BACKEND_URL}/competencia/${id}`).then((response) => {
            let data = response.data;
            formulario['competencia'] = data.competencia;
            formulario['data'] = data.data;
            formulario['link'] = data.link;
            formulario['situacao'] = data.situacao;
            setForm(formulario);
        });
        axios.get(`${BACKEND_URL}/competencia/${id}/usuarios`).then((response) => {
            setTabelaUsuarios(response.data);
        });
      }, []);

      const renderUsuario = (u) => <ListarUsuario key={u.id} usuario={u}/>
    
    return (
        <>
            <form>
                <h3>Editar Competencia</h3>
                <div className="form-group">
                    <label htmlFor="formControlInput">Competencia</label>
                    <input name="competencia" type="text" className="form-control" id="formControlInput" defaultValue={form.competencia}/>
                </div>
                <div className="form-group">
                    <label htmlFor="formControlInput">Data</label>
                    <input name="data" type="date" className="form-control" id="formControlInput" defaultValue={form.data}/>
                </div>
                <div className="form-group">
                    <label htmlFor="formControlInput">Link</label>
                    <input name="link" type="text" className="form-control" id="formControlInput" defaultValue={form.link}/>
                </div>
                <div className="form-group">
                    <label htmlFor="formControlSelect">Situacao</label>
                    <select className="form-control" id="formControlSelect" name="situacao" defaultValue={form.situacao}>
                    <option value={true}>Ativo</option>
                    <option value={false}>Inativo</option>
                    </select>
                </div>
            </form>
            <h3 className="mt-5">Usuários atribuidos na competencia</h3>
            <table className='table mt-5'>
                <thead>
                    <tr>
                        <th scope='col'>Id</th>
                        <th scope='col'>Matricula</th>
                        <th scope='col'>Perfil</th>
                        <th scope='col'>Situação</th>
                        <th scope='col'>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {tabelaUsuarios.map(renderUsuario)}
                </tbody>
            </table>
            <div>
                <Link to={`/atribuirUsuarioCompetencia/${id}`} className='btn btn-info'>Adicionar Usuario</Link>
            </div>
        </>
    );
}
