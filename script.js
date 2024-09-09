function convert() {
    let converter = document.querySelector("select")
    let valor = converter.options[converter.selectedIndex].value
    let entrada = document.querySelector("input").value
    let texto = document.querySelector("textarea")
    //length
    if (valor === "mtm") {
        texto.value = `${entrada * 1609.34}`
    }
    if (valor === "mtk") {
        texto.value = `${entrada * 1.60934}`
    }
    if (valor === "fti") {
        texto.value = `${entrada * 12 }`
    }
    //speed
    if (valor === "mtks") {
        texto.value = `${entrada * 1.60934}`
    }
    if (valor === "ftmps") {
        texto.value = `${entrada * 0.3048 }`
    }
    //energy
    if (valor === "ctj" || valor === "kctkj") {
        texto.value = `${entrada * 4.184}`
    }
    //data
    if (valor === "btb") {
        texto.value = `${entrada * 0.125}`
    }
    if (valor === "btKb") {
        texto.value = `${entrada * 1000}`
    }
    if (valor === "btKi") {
        texto.value = `${entrada * 1024}`
    }
    if (valor === "KitoMg") {
        texto.value = `${entrada * 1000 }`
    }
    if (valor === "KitMe") {
        texto.value = `${entrada * 1024}`
    }
    if (valor === "MetG") {
        texto.value = `${entrada * 1000}`
    }
    if (valor === "MetGi") {
        texto.value = `${entrada * 1024}`
    }
}
