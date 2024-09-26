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

const useLoteriasData = () => {
  const [loterias, setLoterias] = useState([]); 
  const [maismi, setMaisMi] = useState<Loterias[]>([]); 

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
          `https://loteriascaixa-api.herokuapp.com/api/maismilionaria/latest`
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
  }, []);

  return { loterias, maismi };
};

export default useLoteriasData;
