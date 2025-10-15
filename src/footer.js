import React, { useState } from 'react';

function Footer() {
  const [mostrarAutores, setMostrarAutores] = useState(false);

  const handleClick = () => {
    setMostrarAutores(!mostrarAutores);
  };

  return (
    <footer onClick={handleClick} style={{ cursor: 'pointer' }}>
      {mostrarAutores ? (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <p style={{ color: 'white' }}>
            David Águamel, Marcos Mestre e João Messias
          </p>
        </div>
      ) : (
        <>
          <p>&copy; 2020 Trio Jazz Concert</p>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img src="/source_imgs/band_jazz_files/face_icon.jpg" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <img src="/source_imgs/band_jazz_files/insta_icon.jpg" alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <img src="/source_imgs/band_jazz_files/lkin_icons.jpg" alt="LinkedIn" />
            </a>
          </div>
        </>
      )}
    </footer>
  );
}

export default Footer;
