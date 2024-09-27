"use client";
"use strict";
exports.__esModule = true;
var useLoteriasData_1 = require("../hooks/useLoteriasData");
var loteriafinal_1 = require("./loteriafinal");
function LoteriaInfo() {
    var _a = useLoteriasData_1["default"](), loterias = _a.loterias, maismi = _a.maismi, updateLoteria = _a.updateLoteria, loteria = _a.loteria;
    var handlerLoteria = function () {
        updateLoteria("lotofacil");
    };
    return (React.createElement("div", { className: "grid grid-cols-12 gap-4" },
        loteria,
        React.createElement("button", { onClick: handlerLoteria }, "lotofacil"),
        loterias &&
            loterias.map(function (loteria, index) { return (React.createElement("div", { className: "col-span-4 bg-neutral-50 border border-neutral-300 p-2", key: index },
                React.createElement("article", null,
                    React.createElement("h2", { className: "text-xl font-bold" }, loteria === "maismilionaria"
                        ? "+milionária"
                        : loteria === "megasena"
                            ? "mega-sena"
                            : loteria === "loteriafacil"
                                ? "loteriafácil"
                                : loteria === "duplasena"
                                    ? "dupla sena"
                                    : loteria === "diadesorte"
                                        ? "dia de sorte"
                                        : loteria === "supersete"
                                            ? "super sete"
                                            : loteria),
                    React.createElement(loteriafinal_1["default"], { loterias: maismi })))); })));
}
exports["default"] = LoteriaInfo;
