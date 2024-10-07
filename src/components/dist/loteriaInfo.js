"use client";
"use strict";
exports.__esModule = true;
var useLoteriasData_1 = require("../../hooks/useLoteriasData");
var loteriafinal_1 = require("./loteriafinal");
function LoteriaInfo() {
    var loterias = useLoteriasData_1["default"]().loterias;
    return (React.createElement("div", { className: "grid grid-cols-12 gap-4" }, loterias ? (loterias.map(function (loteria, index) { return (React.createElement("div", { className: "col-span-4 bg-neutral-50 border border-neutral-300 p-2 w-full h-full  overflow-hidden", key: index },
        React.createElement(loteriafinal_1["default"], { loteria: loteria }))); })) : (React.createElement("div", null, "carregando"))));
}
exports["default"] = LoteriaInfo;
