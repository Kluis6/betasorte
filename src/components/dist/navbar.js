"use client";
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var useLoteriasData_1 = require("../hooks/useLoteriasData");
function Navbar() {
    // const [loterias, setLoterias] = useState([]);
    var loterias = useLoteriasData_1["default"]().loterias;
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
    return (React.createElement("div", { className: "w-full bg-neutral-800 border-b border-neutral-100 sticky top-0 z-10" },
        React.createElement("div", { className: "px-4 py-2.5 flex justify-between" },
            React.createElement(link_1["default"], { href: "/" },
                React.createElement("h1", { className: "text-white font-bold text-base" }, "BetaSorte")),
            React.createElement("ul", { className: "flex gap-2" }, loterias.map(function (loto, index) { return (React.createElement("li", { className: "text-white active:text-neutral-400 transition-colors hover:text-neutral-300", key: index }, React.createElement(link_1["default"], { href: "/loterias/" + loto }, loto === "maismilionaria"
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
                                    : loto))); })))));
}
exports["default"] = Navbar;
