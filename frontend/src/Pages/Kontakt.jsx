import React from "react";
import "./schema.css";

const Kontakt = () => {
  return (
    <div>
      <h1 className="text-6xl p-10">Kontaktinformation</h1>

      <table id="customers" className="table-auto mb-48">
        <tr>
          <th>Namn</th>
          <th>Towfiq Riskforbundet</th>
        </tr>
        <tr>
          <td>Adress</td>
          <td>Husingeplan 8 BV</td>
        </tr>
        <tr>
          <td>Postadress</td>
          <td>16363 Spånga</td>
        </tr>
        <tr>
          <td>Telephone</td>
          <td>0736757029</td>
        </tr>
        <tr>
          <td>E-post</td>
          <td>towfiq.d@hotmail.com</td>
        </tr>
      </table>
    </div>
  );
};

export default Kontakt;
