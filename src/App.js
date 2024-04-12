import React from "react";
import KonekDong from "./pages/cobaConnect";
import YangKedua from "./pages/kedua";
import HeaderNav from "./pages/inc-template/navbar";
import Footer from "./pages/inc-template/footer";
// import HeroBig from './pages/component/hero';
import SwiperHero from "./pages/component/hero";

function App() {
  return (
    <div>
      <HeaderNav></HeaderNav>
      {/* <HeroBig></HeroBig> */}
      <SwiperHero></SwiperHero>
      <h1>Masa gk nyambung sih ?</h1>
      <h1 className="text-3xl font-bold underline">Hello world!ddd</h1>
      <KonekDong></KonekDong>
      <YangKedua></YangKedua>
      <Footer></Footer>
    </div>
  );
}

export default App;
