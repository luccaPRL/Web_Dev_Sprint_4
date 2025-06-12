# ⚛️ Sistema de Gestão Hospitalar – React + Vite

Este é um projeto desenvolvido em **React com Vite**, como continuação do sistema hospitalar criado em Python.  
Aqui aplicamos os conceitos de desenvolvimento front-end moderno, com **componentes reutilizáveis**, **consumo de API local**, **estilização com Bootstrap e Sass**, e recursos importantes de **JavaScript moderno**.

---

👥 Integrantes do Projeto
Nome	RM
Diego Garcia Tosta	556724
Joud Jihad Jaber	556482
Lucca Pereira	560731

---

## 🎯 Objetivos do Projeto

- Migrar o protótipo da versão HTML/Python para um projeto completo com React + Vite.
- Utilizar componentes reutilizáveis, comunicação pai-filho e boas práticas de JS moderno.
- Estilizar utilizando Bootstrap e Sass.
- Consumir dados de uma API local (arquivo JSON).
- Tratar dados usando localStorage, eventos e funções com `Math`.
- Garantir estrutura **semântica** e **acessível**, conforme as diretrizes do W3C.

---

## ✅ Funcionalidades Implementadas

| Área                  | Funcionalidades                                                              |
|-----------------------|------------------------------------------------------------------------------|
| **Ambulatório**       | - Listar e adicionar pacientes (armazenamento local com `useState`)         |
| **Pronto Atendimento**| - Listar e adicionar pacientes (armazenamento local com `useState`)         |
| **Agendamento**       | - Consumo de uma API local (`/public/dados.json`) para exibir consultas     |
| **Visual**            | - Estilização com Bootstrap e personalização com Sass (`style.scss`)        |
| **Extras**            | - Modularização com componentes, uso de props, hooks e separação de lógica  |

---

## 🧠 Tecnologias Utilizadas

- React (com Vite)
- JavaScript moderno (ES6+)
- Bootstrap 5
- Sass (`.scss`)
- JSON local como simulação de API
- localStorage (em construção)
- Git e GitHub para versionamento

---

## 📁 Estrutura do Projeto

```plaintext
hospital-react/
├── public/
│   └── dados.json
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Ambulatorio.jsx
│   │   ├── ProntoAtendimento.jsx
│   │   └── Agendamento.jsx
│   ├── styles/
│   │   └── style.scss
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

---

## 🔌 Como Executar o Projeto
# Instale as dependências:

npm install

# Rode o projeto localmente:

npm run dev

# Acesse no navegador:

http://localhost:5173

---

📌 Observações Finais
O projeto atende aos critérios de estruturação por componentes, semântica e estilização definida.

O uso de Sass permite maior flexibilidade na personalização de estilo.

O consumo de dados via JSON simula um ambiente real de API.

Todo o projeto foi versionado via Git e estruturado para entrega compactada conforme orientado.
