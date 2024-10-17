import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AnaSayfa from './components/AnaSayfa';
import RezervasyonFormu from './components/RezervasyonFormu';
import KullaniciGiris from './components/KullaniciGiris';
import KullaniciKayit from './components/KullaniciKayit';
import KullaniciProfili from './components/KullaniciProfili';
import Iletisim from './components/Iletisim';
import Footer from './components/Footer';

// ... geri kalan kod ...

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<AnaSayfa />} />
            <Route path="/rezervasyon" element={<RezervasyonFormu />} />
            <Route path="/giris" element={<KullaniciGiris />} />
            <Route path="/kayit" element={<KullaniciKayit />} />
            <Route path="/profil" element={<KullaniciProfili />} />
            <Route path="/iletisim" element={<Iletisim />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
