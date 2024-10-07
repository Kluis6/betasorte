"use client";
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var react_1 = require("react");
var loteriaservice_1 = require("@/services/loteriaservice");
function Navbar() {
    var _a = react_1.useState([]), loteria = _a[0], setLoteria = _a[1];
    react_1.useEffect(function () {
        var loteria = "";
        var concurso = "";
        loteriaservice_1.getLoterias(loteria, concurso)
            .then(function (data) {
            setLoteria(data);
        })["catch"](function (error) {
            console.error(error);
        });
        loteriaservice_1.getLoterias(loteria, concurso);
    }, []);
    return (React.createElement("div", { className: "w-full bg-neutral-800 border-b border-neutral-100 sticky top-0 z-10" },
        React.createElement("div", { className: "px-4 py-2.5 flex justify-between" },
            React.createElement(link_1["default"], { href: "/" },
                React.createElement("h1", { className: "text-white font-bold text-base" }, "BetaSorte")),
            React.createElement("nav", { className: "flex gap-2" }, loteria.map(function (loto, index) { return (React.createElement("ul", { key: index, className: " flex gap-4" },
                React.createElement("li", { className: "text-white active:text-neutral-400 transition-colors hover:text-neutral-300" },
                    React.createElement(link_1["default"], { href: "/loterias/" + loto }, loto === "maismilionaria"
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
                                            : loto),
                    " "))); })))));
}
exports["default"] = Navbar;
