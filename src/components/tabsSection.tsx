"use client";
import { useEffect, useState } from "react";
// import useLoteriasData from "../hooks/useLoteriasData";
import { getLoterias } from "@/services/loteriaservice";

type Loterias = {
  loteria: string;
  concurso: string;
  data: string;
  dezenas: string[];
  trevos: string[];
  acumulou: boolean;
};
export default function TabsSection({ loteria }: { loteria: string }) {
  const [tabs, setTabs] = useState<number>(0);
  // const { result, updateLoteria } = useLoteriasData();
  const [loterias, setLoterias] = useState<Loterias[]>([]);

  const concurso = "1";
  useEffect(() => {
    getLoterias(loteria, concurso) // Assuming 'concurso' is a number and using 1 as a placeholder
      .then((data) => {
        setLoterias(data);
      })
      .catch((error: any) => {
        console.error(error);
        // Assuming updateLoteria is a function that updates the state with the fetched data or null in case of error.
      });
    getLoterias(loteria, concurso);
  }, [loteria, concurso]);

  return (
    <section className="w-full">
      <div>{loterias}</div>

      <div className="flex items-center">
        <button
          type="button"
          className={`w-full ${
            tabs === 0
              ? "bg-neutral-950 text-neutral-50"
              : "bg-neutral-400 text-neutral-800"
          } transition-all font-bold py-2 text-base`}
          onClick={() => setTabs(0)}
        >
          Resultados
        </button>
        <button
          type="button"
          className={`w-full ${
            tabs === 1
              ? "bg-neutral-950 text-neutral-50"
              : "bg-neutral-400 text-neutral-800"
          } transition-all font-bold py-2 text-base`}
          onClick={() => setTabs(1)}
        >
          Método 1
        </button>
        <button
          type="button"
          className={`w-full ${
            tabs === 2
              ? "bg-neutral-950 text-neutral-50"
              : "bg-neutral-400 text-neutral-800"
          } transition-all font-bold py-2 text-base`}
          onClick={() => setTabs(2)}
        >
          Método 2
        </button>
      </div>
      <div className="w-full h-full  py-2">
        {tabs === 0 && (
          <div className="w-full bg-neutral-50 p-2">
            <div>{}</div>
          </div>
        )}
        {tabs === 1 && <div className="w-full bg-neutral-50 p-2">1</div>}
        {tabs === 2 && <div className="w-full bg-neutral-50 p-2">2</div>}
      </div>
    </section>
  );
}
