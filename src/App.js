import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import { useState } from 'react';



import Main from './components/Main';
import Admin from './components/Admin';

const childTemplate = function (name) {
  const [count, setCount] = new useState(0);
  const [lost, setLost] = new useState(0);
  const reset = () => {
    setLost(0);
    setCount(0);
  };
  this.name = name;
  this.count = count;
  this.setCount = setCount;
  this.lost = lost;
  this.setLost = setLost;
  this.reset = reset;
};

function App() {

  const [children, setChildren] = useState([new childTemplate('Frances'), new childTemplate('Dylan'), new childTemplate('Adrian')]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main children={children} />} />
          <Route path="/admin" element={<Admin children={children} addChildren={setChildren} />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;

