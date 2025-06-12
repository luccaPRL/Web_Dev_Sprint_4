import Header from './components/Header';
import Footer from './components/Footer';
import Ambulatorio from './components/Ambulatorio';
import ProntoAtendimento from './components/ProntoAtendimento';
import Agendamento from './components/Agendamento';

function App() {
  return (
    <div className="container mt-4">
      <Header />
      <Ambulatorio />
      <ProntoAtendimento />
      <Agendamento />
      <Footer />
    </div>
  );
}

export default App;
