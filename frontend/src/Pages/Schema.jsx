import React from "react";
import "./schema.css";
const Schema = () => {
  return (
    <div>
      <h1 className="text-6xl p-10">Öppettider</h1>

      <table id="customers" className="table-auto mb-48">
        <tr>
          <th>Dag</th>
          <th>Tid</th>
        </tr>
        <tr>
          <td>Måndag</td>
          <td>Stängt</td>
        </tr>
        <tr>
          <td>Tisdag</td>
          <td>16:00 - 20:00</td>
        </tr>
        <tr>
          <td>Onsdag</td>
          <td>16:00 - 20:00</td>
        </tr>
        <tr>
          <td>Torsdag</td>
          <td>Drop-in</td>
        </tr>
        <tr>
          <td>Fredag</td>
          <td>16:00 - 20:00</td>
        </tr>
        <tr>
          <td>Lördag</td>
          <td>09:00 - 18:00</td>
        </tr>
        <tr>
          <td>Söndag</td>
          <td>09:00 - 18:00</td>
        </tr>
        <tr>
          <td>Plats</td>
          <td>Husingeplan 8 BV</td>
        </tr>
      </table>
    </div>
  );
};

export default Schema;
