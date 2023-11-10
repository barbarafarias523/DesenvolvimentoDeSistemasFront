import { React, useState } from "react";
import axios from 'axios';
import moment from "moment/moment";

const BACKEND_URL = "http://localhost:3352/api";

const formularioVazio = () => {
  return {competencia: '', data: moment(new Date()).format('YYYY-MM-DD'), link: '', situacao: false};
};

export default function CriarCompetencia() {

  const [form, setForm] = useState(formularioVazio());

  const submeter = (e) => {
    e.preventDefault(); // não recarregar a página
    salvar();
  };

  const salvar = async () => {
    await axios.post(`${BACKEND_URL}/competencia`, form).then((response) => {
    });
    setForm(formularioVazio());
  };

  const setValor = (evento) => {
    setForm({...form, [evento.target.name]: evento.target.value});
  };  

  return (
    <form onSubmit={ (e) => submeter(e) }>
      <h3>Cadastro de Competencia</h3>
      <div className="form-group">
        <label htmlFor="formControlInput">Competencia</label>
        <input
          name="competencia"
          type="text"
          className="form-control"
          id="formControlInput"
          value={form.competencia} onChange={setValor}
        />
      </div>
      <div className="form-group">
        <label htmlFor="formControlInput">Data</label>
        <input
          name="data"
          type="date"
          className="form-control"
          id="formControlInput"
          value={form.data} onChange={setValor}
        />
      </div>
      <div className="form-group">
        <label htmlFor="formControlInput">Link</label>
        <input
          name="link"
          type="text"
          className="form-control"
          id="formControlInput"
          value={form.link} onChange={setValor}
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