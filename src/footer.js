// src/Footer.js
import React from "react";

function Footer() {
  return (
    <footer>
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
    </footer>
  );
}

export default Footer;
