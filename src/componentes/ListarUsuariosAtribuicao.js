import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

export default function usuarioLista({ usuario , competencia}) {
  return (
    <tr className="tabela">
      <th scope="row">{usuario.id}</th>
      <th scope="row">{usuario.matricula}</th>
      <th scope="row">{usuario.perfil}</th>
      <th scope="row">{usuario.situacao ? "Ativo" : "Inativo"}</th>
      <th>
        <Link to={`/atribuirUsuario/${usuario.id}/${competencia.id}`} className="link"><FontAwesomeIcon icon={faPlus} /></Link>
      </th>
    </tr>
  );
}