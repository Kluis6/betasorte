"use client";
import { useEffect } from "react";
import useLoteriasData from "../hooks/useLoteriasData";
type Loterias = {
  loteria: string | any;
  concurso: string;
  data: string;
  dezenas: string[];
  trevos: string[];
  acumulou: boolean;
};
export default function LoteriaFinal({ loteria }: { loteria: string }) {
  const { result, updateLoteria } = useLoteriasData();

  useEffect(() => {
    const upLoteria = () => {
      updateLoteria(loteria);
    };
    upLoteria();
  }, []);

  return (
    <div className="h-full w-full  flex flex-col justify-between">
      {result ? (
        result.map((loto, index) => (
          <section className="" key={index}>
            <div className="bg-neutral-700 p-2 ">
              <h2 className="text-white text-base md:text-lg font-bold ">
                {loto.loteria === "maismilionaria"
                  ? "+milionária"
                  : loto.loteria === "megasena"
                  ? "mega-sena"
                  : loto.loteria === "lotofacil"
                  ? "lotofácil"
                  : loto.loteria === "duplasena"
                  ? "dupla sena"
                  : loto.loteria === "diadesorte"
                  ? "dia de sorte"
                  : loto.loteria === "supersete"
                  ? "super sete"
                  : loto.loteria}
              </h2>
            </div>
            <div>
              <p className="font-normal text-base text-gray-800">
                Concuso {loto.concurso} - {loto.data}
              </p>

              <p className="text-xl font-bold text-indigo-950  text-center">
                {loto.dezenas.join(" ")}
              </p>
              <div className="">
                {loto.trevos.length ? (
                  <p className="text-base font-bold text-indigo-950  text-center">
                    Trevos Sorteados:{" "}
                    <span className="text-green-600 text-xl">
                      {loto.trevos.join(" ")}
                    </span>
                  </p>
                ) : (
                  <p></p>
                )}
              </div>
              <p className="text-xl font-semibold text-center">
                {loto.acumulou ? "Acumulou" : "não acumulou"}
              </p>
            </div>
          </section>
        ))
      ) : (
        <p>Nenhum resultado encontrado.</p>
      )}
      <section className="">
        <button
          type="button"
          className=" w-full bg-orange-500 text-white font-bold py-1.5 "
        >
          Veja o resultado
        </button>
      </section>
    </div>
  );
}
