import { React, useState } from "react";
import axios from 'axios';

const BACKEND_URL = "http://localhost:3352/api";

const formularioVazio = () => {
  return {matricula: '', perfil: '', situacao: false};
};

export default function CriarUsuario() {

  const [form, setForm] = useState(formularioVazio());

  const submeter = (e) => {
    e.preventDefault(); // não recarregar a página
    salvar();
  };

  const salvar = async () => {
    await axios.post(`${BACKEND_URL}/usuario`, form).then((response) => {
    });
    setForm(formularioVazio());
  };

  const setValor = (evento) => {
    setForm({...form, [evento.target.name]: evento.target.value});
  };  

  return (
    <form onSubmit={ (e) => submeter(e) }>
      <h3>Cadastro do Usuario</h3>
      <div className="form-group">
        <label htmlFor="formControlInput">Matricula</label>
        <input
          name="matricula"
          type="number"
          className="form-control"
          id="formControlInput"
          value={form.matricula} onChange={setValor}
        />
      </div>
      <div className="form-group">
        <label htmlFor="formControlInput">Perfil</label>
        <input
          name="perfil"
          type="text"
          className="form-control"
          id="formControlInput"
          value={form.perfil} onChange={setValor}
        />
      </div>
      <div className="form-group">
        <label htmlFor="formControlSelect">Situacao</label>
        <select className="form-control" id="formControlSelect" name="situacao" value={form.situacao} onChange={setValor}>
          <option value={true}>Ativo</option>
          <option value={false}>Inativo</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary mb-2 mt-2">Cadastrar</button>
    </form>
  );
}
