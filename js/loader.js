// pantalla de carga
(function () {
    function hideLoader() {
        var loader = document.getElementById('site-loader');
        if (!loader) return;
        loader.classList.add('hidden');
        loader.addEventListener('transitionend', function () {
            if (loader && loader.parentNode)
                loader.parentNode.removeChild(loader);
        });
    }

    // ocultar al cargar
    if (document.readyState === 'complete') {
        setTimeout(hideLoader, 100);
    } else {
        window.addEventListener('load', function () {
            setTimeout(hideLoader, 200);
        }
        );
    }
})();
