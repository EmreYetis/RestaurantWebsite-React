import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Lezzet Durağı</h1>
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/" onClick={closeMenu}>Ana Sayfa</Link></li>
            <li><Link to="/rezervasyon" onClick={closeMenu}>Rezervasyon</Link></li>
            <li><Link to="/giris" onClick={closeMenu}>Giriş</Link></li>
            <li><Link to="/iletisim" onClick={closeMenu}>İletişim</Link></li>
          </ul>
        </nav>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className="menu-icon"></span>
        </button>
      </div>
    </header>
  );
}

export default Header;