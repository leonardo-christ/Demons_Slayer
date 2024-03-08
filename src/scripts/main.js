const btn_slayer = document.querySelector("#btn_slayer");
const modal_hunter = document.querySelector("#hunter_dialog");
const btnclose_hunter = document.querySelector("#fechar_hunter");

const btn_oni = document.querySelector("#btn_oni");
const modal_oni = document.querySelector("#demons_dialog");
const btnclose_oni = document.querySelector("#fechar_oni");

btn_slayer.onclick = function () {
    modal_hunter.showModal()
};

btnclose_hunter.onclick = function () {
    modal_hunter.close()
};

btn_oni.onclick = function () {
    modal_oni.showModal()
};

btnclose_oni.onclick = function () {
    modal_oni.close()
};