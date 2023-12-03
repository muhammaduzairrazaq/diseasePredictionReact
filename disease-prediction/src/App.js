import './App.css';
import { NavBar } from './components/HomePage/NavBar';
import { Introduction } from './components/HomePage/Introduction';
import { Featured } from './components/HomePage/Featured';
import { CenterText } from './components/HomePage/CenterText';
import { Divider } from './components/HomePage/Divider';
import { Footer } from './components/HomePage/Footer';

import { SignIn } from './components/LoginPage/SignIn';
import { SignUp } from './components/LoginPage/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
   {/* <NavBar />
   <Introduction />
   <Featured />
   <CenterText />
   <Divider />
    <Footer /> */}
    <SignIn />
    <SignUp />
   </div>
  );
}

export default App;
