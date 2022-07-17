import Next from './components/Next.js';
import Home from'./components/Home.js';
import AddOrder from'./components/AddOrder.js';
import SharedComponent from'./components/SharedComponent.js';
import Error404 from './components/Error404.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import ScrollToTop from './components/ScrollToTop.js';

import ActiveOrders from './components/ActiveOrders.js';
import ViewActive from './components/ViewActive.js';
import CompletedOrders from './components/CompletedOrders.js';
import Revenue from './components/Revenue.js';
import SubContractors from './components/SubContractors.js';
import Query from './components/Query.js';
import Edit from './components/Edit.js';
import ShowQuery from './components/ShowQuery.js';
import ViewSubcontractor from './components/ViewSubcontractor'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <>
    <Router>

      <ScrollToTop/>
    
<Routes>
<Route path="/login" element={<Login/>} />
<Route path="/register" element={<Register/>} />
  <Route path="/" element={<SharedComponent/>} >
    <Route index element={<Home/>} />
    
    <Route path="/addorder" element={<AddOrder/>} />
    <Route path="/activeorders" element={<ActiveOrders/>} />
    <Route path="/view-active" element={<ViewActive/>} />
    <Route path="/completedorders" element={<CompletedOrders/>} />
    <Route path="/revenue" element={<Revenue/>} />
    <Route path="/next" element={<Next/>} />
    <Route path="/subcontractors" element={<SubContractors/>} />
    <Route path="/query" element={<Query/>} />
    <Route path="/view-subcontractor" element={<ViewSubcontractor/>} />
    <Route path="/showquery" element={<ShowQuery/>} />
    <Route path="/edit" element={<Edit/>} />
    <Route path="*" element={<Error404/>} />
   
  </Route>
   
</Routes>


    </Router>


      
    
    </>
    
  );
}

export default App;
