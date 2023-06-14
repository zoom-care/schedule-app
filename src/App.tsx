import './App.css';
import { ListOfClinics } from './components';
import { useListOfClinics } from './hooks';

function App() {
  let { listOfClinics } = useListOfClinics();

  return (
    <div className="App">
      <ListOfClinics data={listOfClinics} />
    </div>
  );
}

export default App;
