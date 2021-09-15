import {BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Popular from './components/popular/Popular';
import Home from './Home';
import {popular,toprated,upcoming,trending} from "./constants/Urls"
import { createContext,useState } from 'react';
import { API_KEY } from './constants/Constants';
import {mySearch} from "./constants/context" ;


function App() {
  const [searching, setSearch] = useState(" ") ;
  console.log("s",searching);
  return (
    <div className="App">
      
     <Router>
        <Route exact path="/">
          <mySearch.Provider value={setSearch}>
            <Home />
          </mySearch.Provider>
          
        </Route>
        <Route path="/popular">
          <Popular url={popular} title="Popular Movies"/>
        </Route>
        <Route path="/toprated">
          <Popular url={toprated} title="Top Rated"/>
        </Route>
        <Route path="/upcoming">
          <Popular url={upcoming} title="Upcoming Movies"/>
        </Route>
        <Route path="/trending">
          <Popular url={trending} title="Trending"/>
        </Route>
        <Route path="/searching">
          <Popular url={`search/multi?api_key=${API_KEY}&language=en-US&query=${searching}&page=1&include_adult=false`} title={searching}/>
        </Route>

     </Router>
    
    </div>
  );
}

export default App;


