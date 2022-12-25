import './App.css';
import { Routes, Route } from 'react-router-dom';
import Services from './components/Services';
import Service from './components/Service';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Services />} />
        <Route path="/:id/details" exact element={<Service />} />
      </Routes>
    </div>
  );
}

export default App;
