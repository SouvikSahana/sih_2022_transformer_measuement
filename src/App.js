import AdminData from './AdminData';
import './App.css';
import GraphData from './GraphData';
import Header from './Header';
import TextData from './TextData';
import Dashboard from './Dashboard'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import TransformerName from './TransformerName';
import Test from './Test'
import db from './firebase'
import { useState, useEffect } from 'react';

function App() {
const [oillevel,setOillevel]=useState(0)
const [alertState,setAlertState]=useState(false)
  useEffect(()=>{
    db.Oillevel.on("value", function (snapshot) {
        var data = snapshot.val();
        setOillevel(data)
    })
})

useEffect(()=>{
  if(oillevel>7){
    setAlertState(true)
  }else{
    setAlertState(false)
  }
},[oillevel])


  return (
    <div className="App">
    <Router>
    <Routes>
      
    <Route  path='/' element={<div>
      {alertState && <Test data={" Transformer A1 : Oil level is Low"} state={alertState}/>}
    <Dashboard/>
    </div>} />

        <Route  path='monitoring' element={<>
          <TransformerName/>
              {alertState && <Test data={" Transformer A1 : Oil level is Low"} state={alertState}/>}
              <div className="dataHeading top">Data</div>
             <TextData/>
             <div className="dataHeading"> Graphical Data</div>
             <GraphData/>
        </>} />
     </Routes>
    
    </Router>
    </div>
  );
}

export default App;
