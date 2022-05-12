import './App.css';
import MainPage from "./component/main page/MainPage"
import Settings from "./component/setting/Settings"
import Recipes from "./component/recipes/Recipes"
import Tracker from "./component/tracker/Tracker"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { InfoProvider } from "./ContextInfo";
import { useState } from 'react';



function App() {
  const [date, setDate] = useState(new Date());
/**
 * @type {{date: Date, setDate:(date:Date)=>void}
 */
  const providerInformation = {
    date: date,
    setDate: (e) => setDate(e),
  }

  return (
    <div className="App">
      <InfoProvider value={providerInformation}>
        <Router>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/recipes' element={<Recipes />} />
            <Route path='/tracker' element={<Tracker />} >
              <Route path=':trackerTime'/>
            </Route>
          </Routes>
        </Router>
      </InfoProvider>
    </div>
  );
}

export default App;
