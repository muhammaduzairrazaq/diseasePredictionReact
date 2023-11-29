import './App.css';
import { NavBar } from './components/NavBar';
import { Introduction } from './components/Introduction';
import { Featured } from './components/Featured';
import { CenterText } from './components/CenterText';
import { Divider } from './components/Divider';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
   <NavBar />
   <Introduction />
   <Featured />
   <CenterText />
   <Divider />
    <Footer />
   </div>
  );
}

export default App;
