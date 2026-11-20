(function () {
    var header = document.querySelector('header');
    if (!header) return;

    var boton = header.querySelector('.nav-toggle');
    var overlay = header.querySelector('.nav-overlay');
    if (!boton || !overlay) return;

    function abrir(abierto) {
        header.classList.toggle('menu-abierto', abierto);
        document.body.classList.toggle('menu-abierto', abierto);
        boton.setAttribute('aria-expanded', abierto ? 'true' : 'false');
        boton.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
    }

    boton.addEventListener('click', function () {
        abrir(!header.classList.contains('menu-abierto'));
    });

    var cerrar = header.querySelector('.nav-cerrar');
    if (cerrar) {
        cerrar.addEventListener('click', function () {
            abrir(false);
        });
    }

    overlay.addEventListener('click', function () {
        abrir(false);
    });

    header.querySelectorAll('nav a').forEach(function (link) {
        link.addEventListener('click', function () {
            abrir(false);
        });
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') abrir(false);
    });

    window.matchMedia('(min-width: 761px)').addEventListener('change', function (e) {
        if (e.matches) abrir(false);
    });
})();