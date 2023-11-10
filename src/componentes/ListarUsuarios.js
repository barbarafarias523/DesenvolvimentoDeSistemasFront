import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

export default function usuarioLista({ usuario }) {
  return (
    <tr className="tabela">
      <th scope="row">{usuario.id}</th>
      <th scope="row">{usuario.matricula}</th>
      <th scope="row">{usuario.perfil}</th>
      <th scope="row">{usuario.situacao ? "Ativo" : "Inativo"}</th>
      <th>
        <Link to={`/removerUsuario/${usuario.id}`} className="link"><FontAwesomeIcon icon={faTrash} /></Link>
      </th>
    </tr>
  );
}
