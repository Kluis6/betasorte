import TabsSection from "@/components/tabsSection";
import Link from "next/link";

export default function Megasena() {
  return (
    <main>
      <div className="grid grid-cols-12 w-full h-[calc(100vh-2.9rem)]">
        <div className="col-span-2 bg-neutral-100  p-2 flex flex-col border-r border-neutral-400 ">
          <ul className="space-y-1">
            <li className="hover:bg-neutral-300 active:bg-neutral-400 p-1 transition-all">
              <Link href={"/maismilionaria"} className="font-medium">
                MaisMilionária
              </Link>
            </li>
            <li className="hover:bg-neutral-300 active:bg-neutral-400 p-1 transition-all">
              <Link href={"/megasena"} className="font-medium">
                Mega-sena
              </Link>
            </li>
            <li className="hover:bg-neutral-300 active:bg-neutral-400 p-1 transition-all">
              <Link href={"/lotofacil"} className="font-medium">
                LotoFácil
              </Link>
            </li>
            <li className="hover:bg-neutral-300 active:bg-neutral-400 p-1 transition-all">
              <Link href={"/quina"} className="font-medium">
                Quina
              </Link>
            </li>
            <li className="hover:bg-neutral-300 active:bg-neutral-400 p-1 transition-all">
              <Link href={"/lotomania"} className="font-medium">
                Lotomania
              </Link>
            </li>
            <li className="hover:bg-neutral-300 active:bg-neutral-400 p-1 transition-all">
              <Link href={"/timemania"} className="font-medium">
                Timemania
              </Link>
            </li>
            <li className="hover:bg-neutral-300 active:bg-neutral-400 p-1 transition-all">
              <Link href={"/duplasena"} className="font-medium">
                Duplasena
              </Link>
            </li>
            <li className="hover:bg-neutral-300 active:bg-neutral-400 p-1 transition-all">
              <Link href={"/federal"} className="font-medium">
                Federal
              </Link>
            </li>
            <li className="hover:bg-neutral-300 active:bg-neutral-400 p-1 transition-all">
              <Link href={"/diadasorte"} className="font-medium">
                Dia da sorte
              </Link>
            </li>
            <li className="hover:bg-neutral-300 active:bg-neutral-400 p-1 transition-all">
              <Link href={"/supersete"} className="font-medium">
                Super sete
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-10 p-2 ">
          <h2 className="text-base  font-bold mb-2">Megasena</h2>
          <TabsSection />
        </div>
      </div>
    </main>
  );
}
