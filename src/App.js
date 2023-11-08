import './App.css';
import Fibonacci from './components/Fibonacci';
import Spores from './components/Spores';

function App() {
  return (  
    <div className="App">
      <h2 className='font-weight-bold text-center mb-4 '>Welcome to the Bio Scout Challenge 🙂 </h2>
      <Spores/>
      <Fibonacci /> 
    </div>
  );
}

export default App;