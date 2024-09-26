"use client"
import { useState, useEffect } from 'react';

type Loteria = {
  nome: string;
  concurso: number;
  data: string;
  local: string;
  premiacoes: {
    acertos: number;
    vencedores: number;
    premio: string;
  }[];
  numeros: string[];
};

const useLoteriasData = () => {
    const [loterias, setLoterias] = useState([]);

    useEffect(() => {
      const getLoterias = async () => {
        try {
         
          const res = await fetch("https://loteriascaixa-api.herokuapp.com/api/");
          if (!res.ok) {
            throw new Error("Erro ao buscar loterias");
          }
  
          const data = await res.json();
          setLoterias(data);
        } catch (error) {
          console.error("Erro ao buscar loterias:", error);
        }
      };
      getLoterias();
    }, []);
  
  return { loterias };
};

export default useLoteriasData;
