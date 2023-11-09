//sistema de menu e categoria aparecer
function menuAparecer() {
    let menuMobile = document.querySelector('.lista-menu');
    let menusumir = document.querySelector('.menu')
    if (menuMobile.classList.contains('aparecer')) {
        menuMobile.classList.remove('aparecer');
    } else {
        menuMobile.classList.add('aparecer');
    }

    if (menusumir.classList.contains('sumir')) {
        menusumir.classList.remove('sumir');
    } else {
        menusumir.classList.add('sumir')
    }
}

function listaAparecer() {
    let categorias = document.querySelector('.categorias__lista');
    if (categorias.classList.contains('aparecer-categorias')) {
        categorias.classList.remove('aparecer-categorias');
    } else {
        categorias.classList.add('aparecer-categorias');
    }
}

// sistema some e aparece preço/titulo
function mouseon(elemento) {
    console.log('entrou');
    let titulo = elemento.querySelector('.produtos__titulo');
    let valor = elemento.querySelector('.produtos__valor')
    titulo.classList.add('produtos__aparecer')
    valor.classList.add('produtos__aparecer')
}

function mouseoff(elemento) {
    console.log('saiu')
    let titulo = elemento.querySelector('.produtos__titulo');
    let valor = elemento.querySelector('.produtos__valor')
    titulo.classList.remove('produtos__aparecer')
    valor.classList.remove('produtos__aparecer')
}