import React from 'react';
import KonekDong from './pages/cobaConnect';
import YangKedua from './pages/kedua';
import HeaderNav from './pages/navbar';


function App() {
  return (
    <div>
      <h1>Masa gk nyambung sih ?</h1>
      <h1 className="text-3xl font-bold underline">
      Hello world!ddd
    </h1>
      <KonekDong></KonekDong>
      <YangKedua></YangKedua>
      <HeaderNav></HeaderNav>
    </div>
  );
}

export default App;
