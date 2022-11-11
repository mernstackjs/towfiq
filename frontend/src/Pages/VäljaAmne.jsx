import React from "react";
import pic2 from "../images/pic2.jpeg";
import pic3 from "../images/pic3.jpeg";
const Välja_Amne = () => {
  return (
    <div className="flex flex-col w-full h-[350px] p-10">
      <div className="flex mb-10">
        <div>
          <h1 className="text-4xl w-[460px]">
            Gör svenskan enkel och rolig medlärarna
          </h1>
          <p className=" mt-5 text-zinc-900 w-[460px]">
            Välkommen till Towfiq Riksförbundet, ett av Sveriges största
            läxhjälpsförening! Hos oss får ditt barn en personlig förening
            lärare i svenska, som är både en duktig pedagog och en studiekompis
            som kan motivera.
          </p>
          <p className=" mt-5 text-zinc-900 w-[460px] font-bold">
            Vi hjälper alla åldrar, från att hitta läslusten på lågstadiet till
            att sätta exempelvis grammatik och skrivhastighet i högre årskurser.
          </p>
          <p className=" mt-5 text-zinc-900 w-[460px]">
            <span className="font-bold flex flex-col mt-3">
              Mer än bara hjälp med läxorna i svenska
            </span>
            Ditt barns lärare och pluggkompis väljs ut för att matcha såväl
            personlighet som intressen. Ni får en ung och motiverande förebild,
            som själv ofta studerar på exempelvis skolan.
          </p>
          <h1>Läxhjälp i svenska för alla åldrar & behöv:</h1>
          <ul>
            <li className="text-black">Hitta läslusten och börja läsa mer</li>
            <li className="text-black">
              Skapa goda kunskaper och högre självförtroende
            </li>
            <li className="text-black">Höj motivationen och studieglädjen</li>
            <li className="text-black">Lägg bästa möjliga grund i språket</li>
            <li className="text-black">Nå studiemålen för alla årskurser</li>
            <li className="text-black">
              Stötta upp vid t.ex. lässvårigheter och adhd/add
            </li>
          </ul>
        </div>
        <div className="p-10">
          <img src={pic2} alt="" />
        </div>
      </div>
      <div className="flex">
        <div>
          <h1 className="text-4xl w-[460px]">
            Besegra matematiken med mattehjälp
          </h1>
          <p className=" mt-5 text-zinc-900 w-[460px]">
            Sedan 2015 har vi hjälpt tusentals elever runtom i Stockholm med
            matematiken. Under åren har vi fått vara en del av de mest
            fantastiska framgångssagorna. Att 9 av 10 når sina studiemål, är
            något vi är oerhört stolta över.
          </p>
          <p className=" mt-5 text-zinc-900 w-[460px] font-bold">
            Vårt fokus ligger alltid på att hjälpa elever bli mer självständiga
            i sina studier. Därför fokuserar våra mattelärare inte enbart på att
            förbättra ämneskunskaper i matten, utan också på studieteknik och
            självförtroende.
          </p>
          <p className=" mt-5 text-zinc-900 w-[460px]">
            <span className="font-bold flex flex-col mt-3">
              Mattehjälp med lärarna utvald just för dig
            </span>
            Vårt mål är att erbjuda Sveriges bästa lärare inom matematik. För
            att lyckas, räcker det inte lärarna har goda ämneskunskaper och en
            bra pedagogik. De behöver också matcha eleven på ett personligt
            plan.
          </p>
          <h1>Skräddarsydd hjälp i matte för alla behöv:</h1>
          <ul>
            <li className="text-black">Hitta läslusten och börja läsa mer</li>
            <li className="text-black">
              Skapa goda kunskaper och högre självförtroende
            </li>
            <li className="text-black">Höj motivationen och studieglädjen</li>
            <li className="text-black">Lägg bästa möjliga grund i språket</li>
            <li className="text-black">Nå studiemålen för alla årskurser</li>
            <li className="text-black">
              Stötta upp vid t.ex. lässvårigheter och adhd/add
            </li>
          </ul>
        </div>
        <div className="p-10">
          <img src={pic3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Välja_Amne;
