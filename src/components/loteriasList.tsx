"use client";
import { getLoterias } from "@/services/loteriaservice";
import { useEffect, useState } from "react";

type Loterias = {
  loteria: string;
  concurso: string;
  data: string;
  dezenas: string[];
  trevos: string[];
  acumulou: boolean;
};

export default function LoteriasList({ lotery }: { lotery: string }) {
  const [sorteio, setSorteio] = useState("");
  const [loteriaresult, setLoteriaresult] = useState<Loterias[]>([]);

  useEffect(() => {
    getLoterias(lotery, sorteio)
      .then((data) => {
        setLoteriaresult(data);
      })
      .catch((error: any) => {
        console.error(error);
      });
    
  }, []);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSorteio(value); // Atualiza o sorteio corretamente
  };

  return (
    <div>
      <h2>{lotery}</h2>
      <select name="concurso" id="concurso" onChange={handleSelectChange}>
        {loteriaresult.map((loto, index) => (
          <option key={index} value={loto.concurso}>
            {loto.concurso}
          </option>
        ))}
      </select>
      {loteriaresult.length > 0 ? (
        <ul>
          {loteriaresult.map((loteria) => (
            <li key={loteria.concurso}>
              {loteria.data} - {loteria.dezenas.join(", ")}
            </li>
          ))}
        </ul>
      ) : (
        <div>Carregando...</div>
      )}
    </div>
  );
}
