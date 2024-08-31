import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-dvh bg-red-500">
      <Navbar />
      <div className="grid grid-cols-12">
        <div className="col-span-2 bg-neutral-100 min-h-[calc(100vh-2.8rem)] p-2 flex flex-col justify-between ">
          <ul>
            <li className="hover:bg-neutral-300 active:bg-neutral-400">
              <Link href={""} className="font-medium">
                MaisMilionária
              </Link>
            </li>
            <li className="hover:bg-neutral-300 active:bg-neutral-400">
              <Link href={""} className="font-medium">
                Mega-sena
              </Link>
            </li>
            <li className="hover:bg-neutral-300 active:bg-neutral-400">
              <Link href={""} className="font-medium">
                LotoFácil
              </Link>
            </li>
            <li className="hover:bg-neutral-300 active:bg-neutral-400">
              <Link href={""} className="font-medium">
                Quina
              </Link>
            </li>
            <li className="hover:bg-neutral-300 active:bg-neutral-400">
              <Link href={""} className="font-medium">
                Lotomania
              </Link>
            </li>
            <li className="hover:bg-neutral-300 active:bg-neutral-400">
              <Link href={""} className="font-medium">
                Timemania
              </Link>
            </li>
            <li className="hover:bg-neutral-300 active:bg-neutral-400">
              <Link href={""} className="font-medium">
                Duplasena
              </Link>
            </li>
            <li className="hover:bg-neutral-300 active:bg-neutral-400">
              <Link href={""} className="font-medium">
                Federal
              </Link>
            </li>
            <li className="hover:bg-neutral-300 active:bg-neutral-400">
              <Link href={""} className="font-medium">
                Dia da sorte
              </Link>
            </li>
            <li className="hover:bg-neutral-300 active:bg-neutral-400">
              <Link href={""} className="font-medium">
                Super sete
              </Link>
            </li>
          </ul>
          <h2>Config</h2>
        </div>
        <div className="col-span-10  bg-neutral-600 p-2"> vai vendo</div>
      </div>
    </main>
  );
}
