import LoteriaFinal from "@/components/loteriaFinal";
import Link from "next/link";

type Loterias = {
  loteria: string;
  concurso: string;
  data: string;
  dezenas: string[];
  trevos: string[];
  acumulou: boolean;
};

async function getLoterias(){
  const response = await fetch(
    "https://loteriascaixa-api.herokuapp.com/api/"
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();

  // Verifica se data é um array, se não for, retorna um array vazio
  return Array.isArray(data) ? data : [data];
}

// async function getLotomania(): Promise<Loterias[]> {
//   const response = await fetch(
//     "https://loteriascaixa-api.herokuapp.com/api/lotomania/latest"
//   );
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
//   const data = await response.json();

//   // Verifica se data é um array, se não for, retorna um array vazio
//   return Array.isArray(data) ? data : [data];
// }

// async function getMegasena(): Promise<Loterias[]> {
//   const response = await fetch(
//     "https://loteriascaixa-api.herokuapp.com/api/megasena/latest"
//   );
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
//   const data = await response.json();

//   // Verifica se data é um array, se não for, retorna um array vazio
//   return Array.isArray(data) ? data : [data];
// }

// async function getLotofacil(): Promise<Loterias[]> {
//   const response = await fetch(
//     "https://loteriascaixa-api.herokuapp.com/api/lotofacil/latest"
//   );
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
//   const data = await response.json();

//   // Verifica se data é um array, se não for, retorna um array vazio
//   return Array.isArray(data) ? data : [data];
// }

// async function getQuina(): Promise<Loterias[]> {
//   const response = await fetch(
//     "https://loteriascaixa-api.herokuapp.com/api/quina/latest"
//   );
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
//   const data = await response.json();

//   // Verifica se data é um array, se não for, retorna um array vazio
//   return Array.isArray(data) ? data : [data];
// }

// async function getMaismilionaria(): Promise<Loterias[]> {
//   const response = await fetch(
//     "https://loteriascaixa-api.herokuapp.com/api/maismilionaria/latest"
//   );
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
//   const data = await response.json();

//   // Verifica se data é um array, se não for, retorna um array vazio
//   return Array.isArray(data) ? data : [data];
// }

// async function getDuplasena(): Promise<Loterias[]> {
//   const response = await fetch(
//     "https://loteriascaixa-api.herokuapp.com/api/duplasena/latest"
//   );
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
//   const data = await response.json();

//   // Verifica se data é um array, se não for, retorna um array vazio
//   return Array.isArray(data) ? data : [data];
// }

// async function getTimemania(): Promise<Loterias[]> {
//   const response = await fetch(
//     "https://loteriascaixa-api.herokuapp.com/api/timemania/latest"
//   );
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
//   const data = await response.json();

//   // Verifica se data é um array, se não for, retorna um array vazio
//   return Array.isArray(data) ? data : [data];
// }

// async function getFederal(): Promise<Loterias[]> {
//   const response = await fetch(
//     "https://loteriascaixa-api.herokuapp.com/api/federal/latest"
//   );
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
//   const data = await response.json();

//   // Verifica se data é um array, se não for, retorna um array vazio
//   return Array.isArray(data) ? data : [data];
// }

// async function getDiadasorte(): Promise<Loterias[]> {
//   const response = await fetch(
//     "https://loteriascaixa-api.herokuapp.com/api/diadesorte/latest"
//   );
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
//   const data = await response.json();

//   // Verifica se data é um array, se não for, retorna um array vazio
//   return Array.isArray(data) ? data : [data];
// }

// async function getSupersete(): Promise<Loterias[]> {
//   const response = await fetch(
//     "https://loteriascaixa-api.herokuapp.com/api/supersete/latest"
//   );
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
//   const data = await response.json();

//   // Verifica se data é um array, se não for, retorna um array vazio
//   return Array.isArray(data) ? data : [data];
// }

export default async function Home() {
  // const lotomania = await getLotomania();
  // const megasena = await getMegasena();
  // const lotofacil = await getLotofacil();
  // const quina = await getQuina();
  // const maismilionaria = await getMaismilionaria();
  // const duplasena = await getDuplasena();
  // const timemania = await getTimemania();
  // const federal = await getFederal();
  // const diadasorte = await getDiadasorte();
  // const supersete = await getSupersete();
  const loterias = await getLoterias();
  
  return (
    <main className="w-full h-full">
      <div className="grid grid-cols-12">
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
              <Link href={""} className="font-medium">
                Super sete
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-10  bg-neutral-300 p-2 ">
          {/* <div className="grid grid-cols-12 gap-4  ">
            <div className="col-span-12">
              <h2 className="font-bold text-base">Todos os resultados</h2>
            </div>
            <div className="col-span-4 p-2 bg-neutral-50">
              <LoteriaFinal loteria={maismilionaria} />
            </div>
            <div className="col-span-4 p-4 bg-neutral-50">
              <LoteriaFinal loteria={megasena} />
            </div>
            <div className="col-span-4 p-4 bg-neutral-50">
              <LoteriaFinal loteria={lotofacil} />
            </div>
            <div className="col-span-4 p-4 bg-neutral-50">
              <LoteriaFinal loteria={quina} />
            </div>
            <div className="col-span-4 p-4 bg-neutral-50">
              <LoteriaFinal loteria={lotomania} />
            </div>
            <div className="col-span-4 p-4 bg-neutral-50">
              <LoteriaFinal loteria={timemania} />
            </div>
            <div className="col-span-4 p-4 bg-neutral-50">
              <LoteriaFinal loteria={duplasena} />
            </div>
            <div className="col-span-4 p-4 bg-neutral-50">
              <LoteriaFinal loteria={federal} />
            </div>
            <div className="col-span-4 p-4 bg-neutral-50">
              <LoteriaFinal loteria={diadasorte} />
            </div>
            <div className="col-span-4 p-4 bg-neutral-50">
              <LoteriaFinal loteria={supersete} />
            </div>
          </div> */}
        </div>
      </div>
    </main>
  );
}
