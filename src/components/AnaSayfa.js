import React from 'react';
import './AnaSayfa.css';

function AnaSayfa() {
  return (
    <div className="ana-sayfa">
      <h1>Hoş Geldiniz - Lezzet Durağı</h1>
      
      <section className="restoran-tanitim">
        <h2>Hakkımızda</h2>
        <p>Lezzet Durağı, 2010 yılından beri İstanbul'un kalbinde, geleneksel Türk mutfağını modern dokunuşlarla buluşturan bir lezzet noktasıdır. Şef Ahmet Yılmaz önderliğindeki deneyimli ekibimiz, taze ve yerel malzemelerle hazırladığı özgün tariflerle misafirlerimize unutulmaz bir yemek deneyimi sunmaktadır.</p>
        <p>Restoranımız, Boğaz manzarasına hakim konumuyla sadece damakları değil, gözleri de doyurmaktadır. Sıcak ve samimi atmosferimizde, aileniz ve sevdiklerinizle keyifli anlar geçirirken, Türk mutfağının en seçkin lezzetlerini tadabilirsiniz.</p>
        <p>Misafirperverlik ve kalite anlayışımızla, her ziyaretinizde size evinizde hissettirmeyi amaçlıyoruz. Lezzet Durağı'nda, sadece bir yemek değil, bir deneyim yaşayacaksınız.</p>
      </section>
      
      <section className="menu">
        <h2>Menümüz</h2>
        <div className="menu-kategorileri">
          <div className="menu-kategori">
            <h3>Başlangıçlar</h3>
            <ul>
              <li> Zeytinyağlı Yaprak Sarma - 40 TL</li>
              <li>Humus - 35 TL</li>
              <li>Çoban Salata - 30 TL</li>
            </ul>
          </div>
          <div className="menu-kategori">
            <h3>Ana Yemekler</h3>
            <ul>
              <li>Kuzu Tandır - 120 TL</li>
              <li>Izgara Levrek - 100 TL</li>
              <li>Karışık Kebap - 110 TL</li>
            </ul>
          </div>
          <div className="menu-kategori">
            <h3>Tatlılar</h3>
            <ul>
              <li>Fırın Sütlaç - 35 TL</li>
              <li>Baklava - 45 TL</li>
              <li>Kabak Tatlısı - 40 TL</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="galeri">
        <h2>Galeri</h2>
        <div className="galeri-grid">
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" alt="Restorant İç Mekan" />
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0" alt="Lezzetli Yemek" />
          <img src="https://images.unsplash.com/photo-1544025162-d76694265947" alt="Meze Tabağı" />
          <img src="https://images.unsplash.com/photo-1551024506-0bccd828d307" alt="Tatlı" />
          <img src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17" alt="Şef Çalışırken" />
          <img src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b" alt="Restoran Dış Mekan" />
        </div>
      </section>
    </div>
  );
}

export default AnaSayfa;
