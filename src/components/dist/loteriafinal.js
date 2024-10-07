"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var useLoteriasData_1 = require("../../hooks/useLoteriasData");
function LoteriaFinal(_a) {
    var loteria = _a.loteria;
    var _b = useLoteriasData_1["default"](), result = _b.result, updateLoteria = _b.updateLoteria;
    var _c = react_1.useState(false), modal = _c[0], setModal = _c[1];
    react_1.useEffect(function () {
        var upLoteria = function () {
            updateLoteria(loteria);
        };
        upLoteria();
    }, [loteria, updateLoteria]);
    return (React.createElement("div", { className: "h-full" },
        React.createElement("div", { className: "h-full flex flex-col justify-between" },
            result ? (result.map(function (loto, index) { return (React.createElement("section", { className: "", key: index },
                React.createElement("div", { className: "bg-neutral-700 p-2 " },
                    React.createElement("h2", { className: "text-white text-base md:text-lg font-bold " }, loto.loteria === "maismilionaria"
                        ? "+milionária"
                        : loto.loteria === "megasena"
                            ? "mega-sena"
                            : loto.loteria === "lotofacil"
                                ? "lotofácil"
                                : loto.loteria === "duplasena"
                                    ? "dupla sena"
                                    : loto.loteria === "diadesorte"
                                        ? "dia de sorte"
                                        : loto.loteria === "supersete"
                                            ? "super sete"
                                            : loto.loteria)),
                React.createElement("div", null,
                    React.createElement("p", { className: "font-normal text-base text-gray-800" },
                        "Concuso ",
                        loto.concurso,
                        " - ",
                        loto.data),
                    React.createElement("p", { className: "text-xl font-bold text-indigo-950  text-center" }, loto.dezenas ? (loto.dezenas.join(" ")) : (React.createElement("span", null, "carregando ..."))),
                    React.createElement("div", { className: "" }, loto.trevos ? (React.createElement("p", { className: "text-base font-bold text-indigo-950  text-center" },
                        "Trevos Sorteados:",
                        " ",
                        React.createElement("span", { className: "text-green-600 text-xl" }, loto.trevos.join(" ")))) : (React.createElement("p", null))),
                    React.createElement("p", { className: "text-xl font-semibold text-center" }, loto.acumulou ? "Acumulou" : "não acumulou")))); })) : (React.createElement("p", null, "Nenhum resultado encontrado.")),
            React.createElement("section", { className: "" },
                React.createElement("button", { type: "button", onClick: function () { return setModal(!modal); }, className: " w-full bg-orange-500 text-white font-bold py-1.5 " }, "Veja o resultado"))),
        React.createElement("div", { onClick: function () { return setModal(!modal); }, className: "absolute top-0 left-0  bg-neutral-50 z-10 " + (modal ? "h-screen w-screen" : "") })));
}
exports["default"] = LoteriaFinal;
