"use strict";
// type Loterias = {
//   loteria: string;
//   concurso: string;
//   data: string;
//   dezenas: string[];
//   trevos: string[];
//   acumulou: boolean;
// };
exports.__esModule = true;
var loteriaInfo_1 = require("@/components/loteriaInfo");
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
function Home() {
    return (React.createElement("main", { className: "w-full h-full p-2" },
        React.createElement("div", { className: "grid grid-cols-12 gap-y-4" },
            React.createElement("div", { className: "col-span-12" },
                React.createElement("h1", { className: "font-bold text-base" }, "Confira os resulados")),
            React.createElement("div", { className: "col-span-12 " },
                React.createElement(loteriaInfo_1["default"], null)))));
}
exports["default"] = Home;
