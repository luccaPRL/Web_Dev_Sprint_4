import { useEffect, useState } from 'react';

function Agendamento() {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    fetch('/dados.json')
      .then(response => response.json())
      .then(data => setAgendamentos(data))
      .catch(error => console.error("Erro ao carregar agendamentos:", error));
  }, []);

  return (
    <div className="mt-4">
      <h2>Central de Agendamentos</h2>
      <ul className="list-group">
        {agendamentos.map(item => (
          <li className="list-group-item" key={item.id}>
            <strong>{item.nome}</strong> - {item.data} às {item.horario}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Agendamento;
