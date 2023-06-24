const lucesCirculo = document.querySelectorAll('.luz');
let contador = 0;

const prenderLuces = () => {
    lucesCirculo[contador].className = 'luz';
    contador++;

    if (contador > 2) {
        contador = 0;
    }

    const luzActual = lucesCirculo[contador];
    luzActual.classList.add(luzActual.getAttribute('color'))
}
setInterval(prenderLuces,1000)