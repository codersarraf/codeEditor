import './App.css';
import HomePage from './component/Homepage/HomePage';
import DataContext from './component/DataContext/DataContext';


function App() {
  return (
    <DataContext>
      <HomePage/>

    </DataContext>   
  );
}

export default App;
