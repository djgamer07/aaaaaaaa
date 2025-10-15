// src/Tabela.js
import React from "react";

function Tabela() {
  return (
    <table border="1" cellPadding="5">
      <thead>
        <tr>
          <th>Name of song</th>
          <th>Style</th>
          <th>Hour</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Copa 5</td><td>Samba</td><td>21:00</td></tr>
        <tr><td>Mestre Bimba</td><td>Samba</td><td>21:04</td></tr>
        <tr><td>Samba do Avião</td><td>Samba</td><td>21:09</td></tr>
        <tr><td>Girl From Ipanema</td><td>Jazz</td><td>21:14</td></tr>
      </tbody>
    </table>
  );
}

export default Tabela;
