import { createContext, useState } from "react";
import ciyal from "../image/ciyal.jpeg";
import lax from "../image/lax.jpeg";
import idrot from "../image/idrot.jpeg";
import personal from "../image/personal.jpeg";
import läxhjlap from "../image/läxhjalp.jpeg";
import pannerPic from "../image/panner.jpeg";
export const DataContext = createContext();

export const ProviderContext = ({ children }) => {
  const chart = "abcdefghjklmnopqrstuvwxyz123456789ABCDEFGHJKLMNOPQRSTUFWZYZ";
  const length = chart.length;
  let id = "";
  for (let i = 0; i < length; i++) {
    id += chart.charAt(Math.floor(Math.random() * length));
  }
  const nR = Math.floor(Math.random() * 10000);
  const idS = id.slice(0, 17);

  const dataCard = [
    {
      id: "FLZD92puGp856nNFZ6247",
      image: ciyal,
      titel: "Readable content of a page when",
      desc: "English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by",
    },

    {
      id: "2pJ8Gb5TAa6mNGtEd5552",
      image: lax,
      titel: "when an unknown printer took a galley",
      desc: "English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by",
    },
    {
      id: "cBOlWzutK4Jwn27tS8606",
      image: idrot,
      titel: "hall ",
      desc: "English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by",
    },
    {
      id: "xahT81yNFZNB3BR3J5996",
      image: läxhjlap,
      titel: "publishing packages and web page editors ",
      desc: "English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by",
    },
    {
      id: "E64lhU21szdySOB6R4163",
      image: personal,
      titel: "hall ",
      desc: "English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by",
    },
    {
      id: "LkU4fkqrEZZS1ga6h8072",
      image: pannerPic,
      titel: "believable. If you are going to use a passage of Lorem",
      desc: "English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by",
    },
  ];
  const [data, setData] = useState(dataCard);
  return (
    <DataContext.Provider value={[data, setData]}>
      {children}
    </DataContext.Provider>
  );
};
