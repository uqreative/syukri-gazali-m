import React from 'react';
import KonekDong from './pages/cobaConnect';
import YangKedua from './pages/kedua';
import HeaderNav from './pages/inc-template/navbar';
import Footer from './pages/inc-template/footer';


function App() {
  return (
    <div>
      <HeaderNav></HeaderNav>
      <h1>Masa gk nyambung sih ?</h1>
      <h1 className="text-3xl font-bold underline">
      Hello world!ddd
      </h1>
      <KonekDong></KonekDong>
      <YangKedua></YangKedua>
      <Footer></Footer>
    </div>
  );
}

export default App;
