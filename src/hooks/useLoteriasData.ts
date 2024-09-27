"use client";
import { useState, useEffect } from "react";

type Loterias = {
  loteria: string;
  concurso: string;
  data: string;
  dezenas: string[];
  trevos: string[];
  acumulou: boolean;
};

interface Loteria {
  loteria: string;
  concurso: string;
}

const useLoteriasData = () => {
  const [loterias, setLoterias] = useState([]);
  const [maismi, setMaisMi] = useState<Loterias[]>([]);
  const [concurso, setConcurso] = useState("latest");
  const [loteria, setLoteria] = useState("megasena");

  const updateLoteria = (lotos: string) => {
    setLoteria(lotos);
  };

  useEffect(() => {
    const getLoterias = async () => {
      try {
        const res = await fetch(`https://loteriascaixa-api.herokuapp.com/api/`);
        if (!res.ok) {
          throw new Error("Erro ao buscar loterias");
        }

        const data = await res.json();
        setLoterias(data);
      } catch (error) {
        console.error("Erro ao buscar loterias:", error);
      }
    };

    const getMaismi = async () => {
      try {
        const res = await fetch(
          `https://loteriascaixa-api.herokuapp.com/api/${loteria}/${concurso}`
        );
        if (!res.ok) {
          throw new Error("Erro ao buscar maismilionaria");
        }

        const data = await res.json();
        if (data && typeof data === "object") {
          setMaisMi([data]); // Transformando em array se for um único objeto
        } else {
          console.error("Formato de dados inesperado para 'maismi'");
        }
      } catch (error) {
        console.error("Erro ao buscar maismilionaria:", error);
      }
    };

    getMaismi();
    getLoterias();
  }, [concurso, loteria, loterias]);

  return { loterias, maismi, updateLoteria };
};

export default useLoteriasData;
