"use client";

import useLoteriasData from "../hooks/useLoteriasData";
import LoteriaFinal from "./loteriafinal";

export default function LoteriaInfo() {
  const { loterias, maismi, updateLoteria, loteria } = useLoteriasData();

  const handlerLoteria = () => {
    updateLoteria("lotofacil");
  };

  return (
    <div className="grid grid-cols-12 gap-4">
      {loteria}
      <button onClick={handlerLoteria}>lotofacil</button>
      {loterias &&
        loterias.map((loteria, index) => (
          <div
            className="col-span-4 bg-neutral-50 border border-neutral-300 p-2"
            key={index}
          >
            <article>
              <h2 className="text-xl font-bold">
                {loteria === "maismilionaria"
                  ? "+milionária"
                  : loteria === "megasena"
                  ? "mega-sena"
                  : loteria === "loteriafacil"
                  ? "loteriafácil"
                  : loteria === "duplasena"
                  ? "dupla sena"
                  : loteria === "diadesorte"
                  ? "dia de sorte"
                  : loteria === "supersete"
                  ? "super sete"
                  : loteria}
              </h2>

              <LoteriaFinal loterias={maismi} />
            </article>
          </div>
        ))}
    </div>
  );
}
