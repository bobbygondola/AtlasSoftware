import './App.css';
//router
import { Route } from 'react-router-dom'
//pages
import Navigation from '../pages/Nav/Navigation';
import Header from '../pages/Header/Header';
import Search from '../tools/search'
//tabPages
import WindowsPage from '../pages/tabPages/win/Windows';
import MacPage from '../pages/tabPages/mac/Mac';
import LinuxPage from '../pages/tabPages/lin/Linux';
import GamesPage from '../pages/tabPages/gam/Games';
import ScriptsPage from "../pages/tabPages/scr/Scripts"

//to do,
// style tab components

const App = () => {
  return (
    <div className="App">
      <div className="headApp">
        <Header />
        <Navigation />
      </div>
      <Search />

      <Route path="/windows" component={WindowsPage}/>
      <Route path="/mac" component={MacPage}/>
      <Route path="/linux" component={LinuxPage}/>
      <Route path="/games" component={GamesPage}/>
      <Route path="/scripts" component={ScriptsPage}/>

    </div>
  );
}

export default App;
