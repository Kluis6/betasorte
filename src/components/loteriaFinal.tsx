"use client";
import useLoteriasData from "../hooks/useLoteriasData";
type Loterias = {
  loteria: string | any;
  concurso: string;
  data: string;
  dezenas: string[];
  trevos: string[];
  acumulou: boolean;
};
export default function LoteriaFinal({
  retorno,
}: {
 
  retorno: string;
}) {
  const { loterias } = useLoteriasData();

  
  return (
    <div>
      {retorno}
      {loterias ? (
        loterias.map((masmi, index) => (
          <section className="relative" key={index}>
            <div className="bg-neutral-700 p-2 ">
              <h2 className="text-white text-base md:text-lg font-bold ">
                {masmi.loteria}
              </h2>
            </div>
            <div>
              <p className="font-normal text-base text-gray-800">
                Concuso {masmi.concurso} - {masmi.data}
              </p>

              <p className="text-xl font-bold text-indigo-950 ">
                {masmi.dezenas}
              </p>
              <div className="flex text-xl text-green-500 font-bold ">
                {masmi.trevos}
              </div>
              <p className="text-xl font-semibold text-center">
                {masmi.acumulou ? "Acumulou" : "não acumulou"}
              </p>
            </div>
          </section>
        ))
      ) : (
        <p>Nenhum resultado encontrado.</p>
      )}
    </div>
  );
}
