import { React, useState, useEffect } from "react";
import ListarUsuarioAtribuicao from './ListarUsuariosAtribuicao';
import { useParams } from "react-router-dom";
import axios from 'axios';

const BACKEND_URL = "http://localhost:3352/api";

export default function AtribuirUsuarioCompetencia() {
    const [competencias, setCompetencias] = useState([]);
    let {id} = useParams();
    useEffect(() => {
        axios.get(`${BACKEND_URL}/competencia/${id}`).then((response) => {
        setCompetencias(response.data)
    });
    axios.get(`${BACKEND_URL}/usuario`).then((response) => {
        setUsuarios(response.data);
    });
}, []);
    const [usuarios, setUsuarios] = useState([]);
    const renderUsuario = (u) => <ListarUsuarioAtribuicao key={u.id} usuario={u} competencia={competencias}/>
    return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope='col'>Id</th>
                        <th scope='col'>Matricula</th>
                        <th scope='col'>Perfil</th>
                        <th scope='col'>Situacao</th>
                    </tr>
                </thead>
                <tbody>
                    { usuarios.map(renderUsuario) }
                </tbody>
            </table>
        );
}