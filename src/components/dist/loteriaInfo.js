"use client";
"use strict";
exports.__esModule = true;
var useLoteriasData_1 = require("../hooks/useLoteriasData");
function LoteriaInfo() {
    var loterias = useLoteriasData_1["default"]().loterias;
    return (React.createElement("div", { className: "grid grid-cols-12 gap-4" }, loterias ? (loterias.map(function (loteria, index) { return (React.createElement("div", { className: "col-span-4 bg-neutral-50 border border-neutral-300 p-2", key: index },
        React.createElement("div", null,
            React.createElement("h2", { className: "text-black text-base md:text-lg font-bold" }, loteria)))); })) : (React.createElement("div", null, "carregando"))));
}
exports["default"] = LoteriaInfo;
