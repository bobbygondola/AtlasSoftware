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

//to do,
// style tab components
// add hrefs in tabs.

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
      <Route path="linux" component={LinuxPage}/>
      <Route path="/games" component={GamesPage}/>

    </div>
  );
}

export default App;
