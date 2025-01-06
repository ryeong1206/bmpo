// npm install react@18 react-dom@18
// yarn add react-bootstrap bootstrap
// yarn add react-icons
// yarn add styled-components
// yarn add react-calendar

import React from 'react';
import './App.css';

import { Route } from 'react-router-dom';
import { BmpoProvider } from './BmpoContext';
// import styled from "styled-components";

import Home from './Home';
import Introduce from './component/Introduce';
import Conductor from './component/Conductor';
import History from './component/History';
import Donation from './component/Donation';
import Concert from './component/Concert';
import ConcertDetail from './component/ConcertDetail';
import Gallery from './component/Gallery';
import Notice from './component/Notice';
import Login from './component/Login';
import Header from './component/Header';
import MyBookmark from './component/MyBookmark';
import MyReservation from './component/MyReservation';
import Footer from './component/Footer';


function App() {
  return (
    <BmpoProvider>
      <div className="App">

        {/* header */}
        <Header></Header>

        {/* Route */}
        <div>
            <Route path='/'  exact={true} component={Home}></Route>
            {/* 소개 */}
            <Route path='/Introduce' component={Introduce}></Route>
            <Route path='/Conductor' component={Conductor}></Route>
            <Route path='/History' component={History}></Route>
            <Route path='/Donation' component={Donation}></Route>
            {/* 공연 */}
            <Route path='/Concert' exact component={Concert} />
            <Route path='/Concert/:id' component={ConcertDetail}></Route>
            {/* 갤러리 */}
            <Route path='/Gallery' component={Gallery}></Route>
            {/* 공지사항 */}
            <Route path='/Notice' component={Notice}></Route>
            {/* 로그인 */}
            <Route path='/Login' component={Login}></Route>
            {/* 마이페이지 */}
            <Route path='/MyReservation' component={MyReservation}></Route>
            <Route path='/MyBookmark' component={MyBookmark}></Route>
        </div>

        {/* Footer */}
        <Footer></Footer>
      </div>
    </BmpoProvider>
  );
}

export default App;
