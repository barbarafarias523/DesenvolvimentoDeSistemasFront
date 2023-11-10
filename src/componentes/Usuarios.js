import React, { useEffect, useState } from 'react'
import ListarUsuario from './ListarUsuarios';
import axios from 'axios';
import { Link } from 'react-router-dom'

const BACKEND_URL = "http://localhost:3352/api";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    axios.get(`${BACKEND_URL}/usuario`).then((response) => {
      setUsuarios(response.data);
    });
  }, []);
  

  const renderUsuario = (u) => <ListarUsuario key={u.id} usuario={u}/>

  return (
    <div>
      <table className='table'>
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
      <Link to="/cadastrarUsuario" className='btn btn-info'>Novo Usuário</Link>
    </div>
  )
}
