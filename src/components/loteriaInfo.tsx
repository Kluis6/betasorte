"use client";

import useLoteriasData from "../hooks/useLoteriasData";
// import Loteriafinal from "./loteriafinal";
type Loterias = {
  // loteria: string;
  concurso: string;
  data: string;
  dezenas: string[];
  trevos: string[];
  acumulou: boolean;
};

export default function LoteriaInfo() {
  const { loterias, maismi } = useLoteriasData();
  return (
    <div className="grid grid-cols-12 gap-4">
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
              {/* <Loteriafinal loteria={loterias}/> */}
            </article>
          </div>
        ))}
      {maismi &&
        maismi.map((maism, index) => (
          <div key={index}>
            <h3>{maism.loteria}</h3>
            <p>{maism.concurso}</p>
          </div>
        ))}
    </div>
  );
}
