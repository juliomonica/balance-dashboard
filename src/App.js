import HomePage from "./pages/homepage/homepage.component";
import {Route} from 'react-router-dom';
import { GlobalProvider } from "./context/global-state";

import "./App.css";
import Disposicion from "./pages/disposicion/disposicion.component";


const App = () => {
  return (
    <GlobalProvider>
      <div className="Home">
      <Route exact path='/' component={HomePage} />
      <Route exact path='/disposicion' component={Disposicion} />
      </div>
    </GlobalProvider>
  );
};

export default App;
