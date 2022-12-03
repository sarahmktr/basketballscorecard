let hmcount = 0;
let gtcount = 0;

function hmadd1() {
    hmcount += 1;
    document.getElementById("hmscr").textContent=hmcount;
}

function hmadd2() {
    hmcount += 2;
    document.getElementById("hmscr").textContent=hmcount;
}

function hmadd3() {
    hmcount += 3;
    document.getElementById("hmscr").textContent=hmcount;
}

function gtadd1() {
    gtcount += 1;
    document.getElementById("gtscr").textContent=gtcount;
}

function gtadd2() {
    gtcount += 2;
    document.getElementById("gtscr").textContent=gtcount;
}

function gtadd3() {
    gtcount += 3;
    document.getElementById("gtscr").textContent=gtcount;
}

function reset() {
    document.getElementById("hmscr").textContent=0;
    document.getElementById("gtscr").textContent=0;
}