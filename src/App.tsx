import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Appointments from "./screens/Appointments";

import './App.css';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Appointments />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
