import React from 'react'
import { Link } from 'react-router-dom'

export default function Cabecalho() {
  return (
    <header>
      <span>Learning Path Facisa</span>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/usuarios">Usuarios</Link>
        <Link to="/competencias">Competencias</Link>
      </nav>
    </header>
  )
}
