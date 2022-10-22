/* --- OCULTAR NAV AL HACER SCROLL --- */
let ubicacionPrincipal = window.pageYOffset;
let $nav = document.querySelector('#menu');

window.addEventListener('scroll', function() {
    let ubicacionActual = window.pageYOffset;
    /* --- CONDICION QUE OCULTA O MUESTRA EL NAV --- */
    if( ubicacionPrincipal >= ubicacionActual ){
        $nav.style.top = "0px"
    }else {
        $nav.style.top = "-68px"
    }

    /* --- PASAR UBICACION ACTUAL A LA UBICACION PRINCIPAL --- */
    /* --- Permite que se esconda el nav en cualquier parte de la página*/
    ubicacionPrincipal = ubicacionActual
})