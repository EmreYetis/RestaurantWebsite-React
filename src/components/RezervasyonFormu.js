import React, { useState } from 'react';
import './RezervasyonFormu.css';

function RezervasyonFormu() {
  const [rezervasyon, setRezervasyon] = useState({
    tarih: '',
    saat: '',
    kisiSayisi: 1,
    ad: '',
    telefon: '',
    email: '',
    ozelIstekler: ''
  });

  const handleChange = (e) => {
    setRezervasyon({ ...rezervasyon, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada rezervasyon işlemi yapılacak
    console.log('Rezervasyon yapıldı:', rezervasyon);
  };

  return (
    <div className="rezervasyon-formu">
      <h2>Rezervasyon Yap</h2>
      <form onSubmit={handleSubmit}>
        <input type="date" name="tarih" value={rezervasyon.tarih} onChange={handleChange} required />
        <input type="time" name="saat" value={rezervasyon.saat} onChange={handleChange} required />
        <input type="number" name="kisiSayisi" value={rezervasyon.kisiSayisi} onChange={handleChange} min="1" required />
        <input type="text" name="ad" value={rezervasyon.ad} onChange={handleChange} placeholder="Adınız" required />
        <input type="tel" name="telefon" value={rezervasyon.telefon} onChange={handleChange} placeholder="Telefon" required />
        <input type="email" name="email" value={rezervasyon.email} onChange={handleChange} placeholder="E-posta" required />
        <textarea name="ozelIstekler" value={rezervasyon.ozelIstekler} onChange={handleChange} placeholder="Özel istekleriniz"></textarea>
        <button type="submit">Rezervasyon Yap</button>
      </form>
    </div>
  );
}

export default RezervasyonFormu;
