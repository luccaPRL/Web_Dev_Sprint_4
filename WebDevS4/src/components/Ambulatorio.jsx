import { useState } from 'react';

function Ambulatorio() {
  const [pacientes, setPacientes] = useState([]);
  const [nome, setNome] = useState('');

  function adicionarPaciente() {
    if (nome.trim()) {
      setPacientes([...pacientes, nome]);
      setNome('');
    }
  }

  return (
    <div className="mt-4">
      <h2>Ambulatório</h2>
      <input className="form-control" value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome do paciente" />
      <button className="btn btn-success mt-2" onClick={adicionarPaciente}>Adicionar</button>
      <ul className="mt-2 list-group">
        {pacientes.map((paciente, index) => (
          <li className="list-group-item" key={index}>{paciente}</li>
        ))}
      </ul>
    </div>
  );
}

export default Ambulatorio;
