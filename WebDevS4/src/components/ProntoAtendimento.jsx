import { useState } from 'react';

function ProntoAtendimento() {
  const [lista, setLista] = useState([]);
  const [nome, setNome] = useState('');

  function adicionar() {
    if (nome.trim()) {
      setLista([...lista, nome]);
      setNome('');
    }
  }

  return (
    <div className="mt-4">
      <h2>Pronto Atendimento</h2>
      <input className="form-control" value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome do paciente" />
      <button className="btn btn-danger mt-2" onClick={adicionar}>Adicionar</button>
      <ul className="mt-2 list-group">
        {lista.map((item, i) => (
          <li className="list-group-item" key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProntoAtendimento;
