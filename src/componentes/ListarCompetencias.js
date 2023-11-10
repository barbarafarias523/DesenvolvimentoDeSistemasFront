import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from 'react-router-dom';

export default function CompetenciaLista({ competencia }) {
  return (
    <tr className="tabela">
      <th scope="row">{competencia.id}</th>
      <th scope="row">{competencia.competencia}</th>
      <th scope="row">{competencia.data}</th>
      <th scope="row">{competencia.link}</th>
      <th scope="row">{competencia.situacao ? "Ativo" : "Inativo"}</th>
      <th>
        <Link to={`/editarCompetencia/${competencia.id}`} className="link"><FontAwesomeIcon icon={faPenToSquare} /></Link>
      </th>
    </tr>
  );
}