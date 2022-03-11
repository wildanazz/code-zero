import { Route, Routes } from 'react-router-dom';
import Background from './Background/Background';
import Identity from './Identity/Identity';
import Toggle from './Toggle/Toggle';
import Main from './Main/Main';
import './App.scss';

function App(): JSX.Element {
  return (
    <div className="App">
      <Background />
      <Identity />
      <Toggle />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
