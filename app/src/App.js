import logo from './logo.svg';
import './App.css';
import DataGrid from './Components/DataGrid';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <DataGrid/>
    </div>
  );
}

export default App;
