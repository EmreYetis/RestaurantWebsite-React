import React, { useState } from 'react';
import './KullaniciGiris.css';

function KullaniciGiris() {
  const [giris, setGiris] = useState({ email: '', sifre: '' });

  const handleChange = (e) => {
    setGiris({ ...giris, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada giriş işlemi yapılacak
    console.log('Giriş yapıldı:', giris);
  };

  return (
    <div className="kullanici-giris">
      <h2>Giriş Yap</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" value={giris.email} onChange={handleChange} placeholder="E-posta" required />
        <input type="password" name="sifre" value={giris.sifre} onChange={handleChange} placeholder="Şifre" required />
        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
}

export default KullaniciGiris;
