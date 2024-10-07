"use client";
"use strict";
exports.__esModule = true;
var loteriaservice_1 = require("@/services/loteriaservice");
var react_1 = require("react");
function LoteriasList(_a) {
    var lotery = _a.lotery;
    var _b = react_1.useState(""), sorteio = _b[0], setSorteio = _b[1];
    var _c = react_1.useState([]), loteriaresult = _c[0], setLoteriaresult = _c[1];
    react_1.useEffect(function () {
        loteriaservice_1.getLoterias(lotery, sorteio)
            .then(function (data) {
            setLoteriaresult(data);
        })["catch"](function (error) {
            console.error(error);
        });
    }, []);
    var handleSelectChange = function (event) {
        var value = event.target.value;
        setSorteio(value); // Atualiza o sorteio corretamente
    };
    return (React.createElement("div", null,
        React.createElement("h2", null, lotery),
        React.createElement("select", { name: "concurso", id: "concurso", onChange: handleSelectChange }, loteriaresult.map(function (loto, index) { return (React.createElement("option", { key: index, value: loto.concurso }, loto.concurso)); })),
        loteriaresult.length > 0 ? (React.createElement("ul", null, loteriaresult.map(function (loteria) { return (React.createElement("li", { key: loteria.concurso },
            loteria.data,
            " - ",
            loteria.dezenas.join(", "))); }))) : (React.createElement("div", null, "Carregando..."))));
}
exports["default"] = LoteriasList;
