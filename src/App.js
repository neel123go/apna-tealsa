import './App.css';
import Header from './components/Header/Header';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1 className='font-mono text-5xl text-orange-800 mt-10'>Tesla<span className='text-lg ml-2'>prime</span></h1>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
