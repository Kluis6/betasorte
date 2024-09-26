"use client"
import useLoteriasData from "../hooks/useLoteriasData";

export default function LoteriaInfo() {
  const { loterias } = useLoteriasData();
  return (
    <div>
      {loterias &&
        loterias.map((loteria, index) => (
          <div key={index}>
            <span className="text-xl font-bold">{loteria}</span>
          </div>
        ))}
    </div>
  );
}
