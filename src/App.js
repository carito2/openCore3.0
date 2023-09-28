import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppContext } from './context/AppContext';
/* Components import */
import Splash from './pages/splash/Splash';
import Home from './pages/home/Home';
// import Lists from './pages/lists/Lists';
// import Forms from './pages/forms/Forms';
// import Connections from './pages/connections/Connections';
// import ListTable from './components/listTable/ListTable';
// import ProjectNavigation from './pages/projectNavigation/ProjectNavigation';
// import FormAttributes from './components/formAttributes/FormAttributes';
// import FormTable from './components/formTable/FormTable';
/* CSS Imports*/
import './App.css';

function App() {
  const { buttonAttributes } = useContext(AppContext);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route path='/home' element={<Home />} />
        {/* <Route path=':nameOfProject' element={<ProjectNavigation />}> 
          <Route path='list' element={<Lists />}>
            <Route path=':nameList' element={<ListTable />}>
              <Route path=':nameField' element={<FormAttributes classNameVisibility={`${buttonAttributes && 'visible'}`} />} />
            </Route>
          </Route>
          <Route path='form' element={<Forms />}>
            <Route path=':nameForm' element={<FormTable />}>
                <Route path=':nameField' element={<FormAttributes classNameVisibility={`${buttonAttributes && 'visible'}`} />} />
            </Route>
          </Route>
          <Route path='connections' element={<Connections />} />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;

