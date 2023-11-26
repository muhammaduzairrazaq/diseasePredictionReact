import './App.css';
import { NavBar } from './components/NavBar';
import { Introduction } from './components/Introduction';
import { Featured } from './components/Featured';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
   <NavBar />
   <Introduction />
   <Featured />
   </div>
  );
}

export default App;
