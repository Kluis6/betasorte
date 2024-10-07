"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
// import useLoteriasData from "../hooks/useLoteriasData";
var loteriaservice_1 = require("@/services/loteriaservice");
function TabsSection(_a) {
    var loteria = _a.loteria;
    var _b = react_1.useState(0), tabs = _b[0], setTabs = _b[1];
    // const { result, updateLoteria } = useLoteriasData();
    var _c = react_1.useState([]), loterias = _c[0], setLoterias = _c[1];
    var concurso = "1";
    react_1.useEffect(function () {
        loteriaservice_1.getLoterias(loteria, concurso) // Assuming 'concurso' is a number and using 1 as a placeholder
            .then(function (data) {
            setLoterias(data);
        })["catch"](function (error) {
            console.error(error);
            // Assuming updateLoteria is a function that updates the state with the fetched data or null in case of error.
        });
        loteriaservice_1.getLoterias(loteria, concurso);
    }, [loteria, concurso]);
    return (React.createElement("section", { className: "w-full" },
        React.createElement("div", null, loterias),
        React.createElement("div", { className: "flex items-center" },
            React.createElement("button", { type: "button", className: "w-full " + (tabs === 0
                    ? "bg-neutral-950 text-neutral-50"
                    : "bg-neutral-400 text-neutral-800") + " transition-all font-bold py-2 text-base", onClick: function () { return setTabs(0); } }, "Resultados"),
            React.createElement("button", { type: "button", className: "w-full " + (tabs === 1
                    ? "bg-neutral-950 text-neutral-50"
                    : "bg-neutral-400 text-neutral-800") + " transition-all font-bold py-2 text-base", onClick: function () { return setTabs(1); } }, "M\u00E9todo 1"),
            React.createElement("button", { type: "button", className: "w-full " + (tabs === 2
                    ? "bg-neutral-950 text-neutral-50"
                    : "bg-neutral-400 text-neutral-800") + " transition-all font-bold py-2 text-base", onClick: function () { return setTabs(2); } }, "M\u00E9todo 2")),
        React.createElement("div", { className: "w-full h-full  py-2" },
            tabs === 0 && (React.createElement("div", { className: "w-full bg-neutral-50 p-2" },
                React.createElement("div", null))),
            tabs === 1 && React.createElement("div", { className: "w-full bg-neutral-50 p-2" }, "1"),
            tabs === 2 && React.createElement("div", { className: "w-full bg-neutral-50 p-2" }, "2"))));
}
exports["default"] = TabsSection;
