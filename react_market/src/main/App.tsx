import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import HouseDetail from '../house/HouseList';
import HouseList from '../house/HouseList';
import { BrowserRouter , Route, Routes} from 'react-router-dom';

function App() {
  return (
    //container is bootstrap css
    <BrowserRouter>
      <div className="container">
      <Header subtitle= "Providing houses all over the world"/>
      {/* <HouseList/> */}
      <Routes>
          <Route path ="/" element = {<HouseList/>}></Route>
          <Route path = "/house/:id" element = {<HouseDetail/>}></Route>
      </Routes>
   </div>
    </BrowserRouter>
 
  );
}

export default App;
