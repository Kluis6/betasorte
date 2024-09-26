"use client";
import { useEffect, useState } from "react";

interface LotteryResult {
  loteria: string;
  concurso: number;
  data: string;
  numeros: string[];
}

export default function TestApi() {
  const [data, setData] = useState<LotteryResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Chama a API Route que criamos
    fetch("/api/loterias")
      .then((response) => response.json())
      .then((result: LotteryResult) => setData(result))
      .catch((err) => setError("Erro ao buscar dados da loteria"));
  }, []);



  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <div>Carregando...</div>;
  }
  return (
    <div>
      {" "}
      <h1>Resultado da Loteria: {data.loteria}</h1>
      <p>Concurso: {data.concurso}</p>
      <p>Data: {data.data}</p>
      <p>Números: {data.numeros.join(", ")}</p>
    </div>
  );
}
