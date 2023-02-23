import logo from './logo.svg';
import './App.css';
import { DarkModeProvider } from './context/DarkModeContext';
import { Container } from 'react-bootstrap';
import DarkMode from './pages/DarkModePage';

function App() {
  return (
    <div className="App">
      <DarkModeProvider>
        <DarkMode/>
      </DarkModeProvider>
    </div>
  );
}

export default App;
