document.addEventListener('DOMContentLoaded', function () {
    const botoCanviTema = document.getElementById('toggleTheme');
    const cosPagina = document.body;

    botoCanviTema.addEventListener('click', () => {
        cosPagina.classList.toggle('dark-theme');
        const temaActiu = cosPagina.classList.contains('dark-theme');
        localStorage.setItem('temaActiu', temaActiu);
        actualitzarBotonTema(temaActiu);
    });

    function actualitzarBotonTema(temaActiu) {
        botoCanviTema.textContent = temaActiu ? 'Tema Clar' : 'Tema Fosc';
    }

    
    const temaGuardat = localStorage.getItem('temaActiu');

    if (temaGuardat !== null) {
        cosPagina.classList.toggle('dark-theme', temaGuardat === 'true');
        actualitzarBotonTema(temaGuardat === 'true');
    }
});
