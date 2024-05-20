function searchText() {
    var searchText = document.getElementById('searchInput').value.toLowerCase(); // Ottiene il testo di ricerca e lo converte in minuscolo
    var content = document.body.innerText.toLowerCase(); // Ottiene il testo della pagina e lo converte in minuscolo
    var index = content.indexOf(searchText); // Cerca il testo di ricerca nella pagina

    if (index >= 0) {
        window.getSelection().removeAllRanges(); // Cancella eventuali selezioni precedenti
        var range = document.createRange();
        var sel = window.getSelection();
        range.setStart(content.childNodes[0], index);
        range.setEnd(content.childNodes[0], index + searchText.length);
        sel.addRange(range);
    } else {
        alert("Testo non trovato!");
    }
}
function toggleSearchInput() {
    var searchInput = document.getElementById('searchInput');
    if (searchInput.classList.contains('hidden')) {
        searchInput.classList.remove('hidden');
        searchInput.focus();
    } else {
        searchInput.classList.add('hidden');
    }
}


window.addEventListener('scroll', function() {
    const headerHome = document.getElementById('header-home');
    const headerScroll = document.getElementById('header-scroll');

    if (window.scrollY > 50) {
        headerHome.style.opacity = 0;
        setTimeout(() => {
            headerHome.style.display = 'none';
            headerScroll.style.display = 'block';
            setTimeout(() => {
                headerScroll.style.opacity = 1;
            }, 10); // Allow time for the browser to apply the display change before starting the transition
        }, 300); // Wait for the opacity transition to complete
    } else {
        headerScroll.style.opacity = 0;
        setTimeout(() => {
            headerScroll.style.display = 'none';
            headerHome.style.display = 'flex';
            setTimeout(() => {
                headerHome.style.opacity = 1;
            }, 10); // Allow time for the browser to apply the display change before starting the transition
        }, 300); // Wait for the opacity transition to complete
    }
});


