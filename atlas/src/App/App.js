import './App.css';
import Navigation from '../pages/Nav/Navigation';
import Header from '../pages/Header/Header';

const App = () => {
  return (
    <div className="App" style={{border:"1px solid black"}}>
      <div className="headApp">
        <Header />
        <Navigation />
      </div>
    </div>
  );
}

export default App;
