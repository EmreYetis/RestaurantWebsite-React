import React from 'react';
import './Iletisim.css';

function Iletisim() {
  return (
    <div className="iletisim">
      <h2>İletişim</h2>
      <p>Adres: Örnek Sokak No:123, Datça, Muğla</p>
      <p>Telefon: 0252 345 67 89</p>
      <p>E-posta: info@lezzetlirestoran.com</p>
      <div className="harita">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100632.92961814047!2d27.598351660610656!3d36.72756567454794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bf7d8e9d4f3d8d%3A0x5e7d8b4c1b1b1b1b!2zRGF0w6dhLCBNdcSfbGE!5e0!3m2!1str!2str!4v1650000000000!5m2!1str!2str"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Iletisim;
