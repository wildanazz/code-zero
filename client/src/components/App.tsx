import { Route, Routes } from 'react-router-dom';
import Background from './Background/Background';
import Curtain from './Curtain/Curtain';
import Identity from './Identity/Identity';
import Toggle from './Toggle/Toggle';
import Main from './Main/Main';
import './App.scss';

function App(): JSX.Element {
  return (
    <div className="app">
      <Background />
      <Curtain />
      <Identity />
      <Toggle />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
