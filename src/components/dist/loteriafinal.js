"use client";
"use strict";
exports.__esModule = true;
function LoteriaFinal(_a) {
    var loterias = _a.loterias;
    return (React.createElement("div", null, loterias ? (loterias.map(function (masmi, index) { return (React.createElement("section", { className: "relative", key: index },
        React.createElement("div", { className: "bg-neutral-700 p-2 " },
            React.createElement("h2", { className: "text-white text-base md:text-lg font-bold " }, masmi.loteria)),
        React.createElement("div", null,
            React.createElement("p", { className: "font-normal text-base text-gray-800" },
                "Concuso ",
                masmi.concurso,
                " - ",
                masmi.data),
            React.createElement("p", { className: "text-xl font-bold text-indigo-950 " }, masmi.dezenas),
            React.createElement("div", { className: "flex text-xl text-green-500 font-bold " }, masmi.trevos),
            React.createElement("p", { className: "text-xl font-semibold text-center" }, masmi.acumulou ? "Acumulou" : "não acumulou")))); })) : (React.createElement("p", null, "Nenhum resultado encontrado."))));
}
exports["default"] = LoteriaFinal;
