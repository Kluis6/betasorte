"use client";
import useLoteriasData from "../hooks/useLoteriasData";
import LoteriaFinal from "./loteriafinal";

export default function LoteriaInfo() {
  const { loterias } = useLoteriasData();

  return (
    <div className="grid grid-cols-12 gap-4">
      {loterias ? (
        loterias.map((loteria, index) => (
          <div
            className="col-span-4 bg-neutral-50 border border-neutral-300 p-2"
            key={index}
          >
            <div>
              <h2 className="text-black text-base md:text-lg font-bold">
                {loteria}
              </h2>
            </div>
            <LoteriaFinal loteria={loteria} />
          </div>
        ))
      ) : (
        <div>carregando</div>
      )}
    </div>
  );
}
