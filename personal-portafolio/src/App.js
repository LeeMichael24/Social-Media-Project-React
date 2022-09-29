/* import logo from './logo.svg'; */
import './App.css';
import { NavBar } from './componets/NavBar';
import { Banner } from './componets/Banner';
import { Skills } from './componets/Skills';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
