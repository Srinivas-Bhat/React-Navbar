// import logo from './logo.svg';
import './App.css';
import Button from "./components/Button";
import Logo from "./components/Logo";
import Links from "./components/Links";


let info = [
  {names:"Services"},{names:"Projects"},{names:"About"},
]

function App() {
  return (
    <div className="container">
      <Logo/>
      <div className='links'>
        {info.map((el) => (
          <Links{...el}/>
        ))}
      </div>
      <Button/>
    </div>
  );
}

export default App;
