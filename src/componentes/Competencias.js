import React, { useEffect, useState } from 'react'
import ListarCompetencia from './ListarCompetencias';
import axios from 'axios';
import { Link } from 'react-router-dom'

const BACKEND_URL = "http://localhost:3352/api";

export default function Competencias() {
  const [competencias, setCompetencias] = useState([]);
  useEffect(() => {
    axios.get(`${BACKEND_URL}/competencia`).then((response) => {
      setCompetencias(response.data);
    });
  }, []);
  

  const renderCompetencia = (c) => <ListarCompetencia key={c.id} competencia={c}/>

  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Id</th>
            <th scope='col'>Competencia</th>
            <th scope='col'>Data</th>
            <th scope='col'>Link</th>
            <th scope='col'>Situação</th>
            <th scope='col'>Opções</th>
          </tr>
        </thead>
        <tbody>
          { competencias.map(renderCompetencia) }
        </tbody>
      </table>
      <Link to="/cadastrarCompetencia" className='btn btn-info'>Nova Competencia</Link>
    </div>
  )
}