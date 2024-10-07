"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getLoterias } from "@/services/loteriaservice";

export default function Navbar() {
  const [loteria, setLoteria] = useState<any[]>([]);

  useEffect(() => {
    const loteria = "";
    const concurso = "";
    getLoterias(loteria, concurso)
      .then((data: any) => {
        setLoteria(data);
      })
      .catch((error: any) => {
        console.error(error);
      });
    getLoterias(loteria, concurso);
  }, []);

  return (
    <div className="w-full bg-neutral-800 border-b border-neutral-100 sticky top-0 z-10">
      <div className="px-4 py-2.5 flex justify-between">
        <Link href={"/"}>
          <h1 className="text-white font-bold text-base">BetaSorte</h1>
        </Link>

        <nav className="flex gap-2">
          {loteria.map((loto, index) => (
            <ul key={index} className=" flex gap-4">
              <li
                className={`text-white active:text-neutral-400 transition-colors hover:text-neutral-300`}
              >
                <Link href={`/loterias/${loto}`}>
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
                </Link>{" "}
              </li>
            </ul>
          ))}
        </nav>
      </div>
    </div>
  );
}
