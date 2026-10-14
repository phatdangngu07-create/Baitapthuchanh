function batDen(mau) {
    document.getElementById("den-red").classList.remove("is-on");
    document.getElementById("den-yellow").classList.remove("is-on");
    document.getElementById("den-green").classList.remove("is-on");

    document.getElementById("den-" + mau).classList.add("is-on");
}