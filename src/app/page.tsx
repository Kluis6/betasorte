// type Loterias = {
//   loteria: string;
//   concurso: string;
//   data: string;
//   dezenas: string[];
//   trevos: string[];
//   acumulou: boolean;
// };

import LoteriaInfo from "@/components/loteriaInfo";

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

export default function Home() {
  return (
    <main className="w-full h-full p-2">
      <div className="grid grid-cols-12 gap-y-4">
        <div className="col-span-12">
          <h1 className="font-bold text-base">Confira os resulados</h1>
        </div>
        <div className="col-span-12 ">
          <LoteriaInfo />
        </div>
      </div>
    </main>
  );
}
