"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import useLoteriasData from "../hooks/useLoteriasData";

type Loterias = {
  loteria: string;
  concurso: string;
  data: string;
  dezenas: string[];
  trevos: string[];
  acumulou: boolean;
};

export default function Navbar() {
  // const [loterias, setLoterias] = useState([]);

  const { loterias, maismi } = useLoteriasData();

  // useEffect(() => {
  //   const getLoterias = async () => {
  //     try {
  //       // Faz uma requisição para a API interna criada em /api/loterias
  //       const res = await fetch("https://loteriascaixa-api.herokuapp.com/api/");
  //       if (!res.ok) {
  //         throw new Error("Erro ao buscar loterias");
  //       }

  //       const data = await res.json();
  //       setLoterias(data);
  //     } catch (error) {
  //       console.error("Erro ao buscar loterias:", error);
  //     }
  //   };
  //   getLoterias();
  // }, []);
 console.log(maismi)
 console.log(loterias)
  return (
    <div className="w-full bg-neutral-800 border-b border-neutral-100 sticky top-0 z-10">
      <div className="px-4 py-2.5 flex justify-between">
        <Link href={"/"}>
          <h1 className="text-white font-bold text-base">BetaSorte</h1>
        </Link>
        <ul className="flex gap-2">
          {loterias.map((loto, index) => (
            <li className={`text-white active:text-neutral-400 transition-colors hover:text-neutral-300`} key={index}>
              {
                <Link href={`/loteria/`}>
                  {loto === "maismilionaria"
                    ? "+milionária"
                    : loto === "megasena"
                    ? "mega-sena"
                    : loto === "lotofacil"
                    ? "lotofácil"
                    : loto === "duplasena"
                    ? "dupla sena"
                    : loto === "diadesorte"
                    ? "dia de sorte"
                    : loto === "supersete"
                    ? "super sete"
                    : loto}
                </Link>
              }
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
