import './App.css';
import KennelComponent from './components/KennelComponent';
import RoostComponent from './components/RoostComponent';
import AddDog from './components/NewSearchComponent';
import AddBat from './components/AddBat';

function App() {
  return (
    <div>
      <AddDog />
      <AddBat />
      <KennelComponent />
      <RoostComponent />
    </div>
    
  );
}

export default App;
