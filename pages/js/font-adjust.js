document.addEventListener("DOMContentLoaded", function() {
    const increaseFontBtn = document.getElementById("increase-font");
    const decreaseFontBtn = document.getElementById("decrease-font");
    const textElements = document.querySelectorAll(".text"); // Seletor para os elementos cujo tamanho da fonte será alterado

    let currentFontSize = 20; // Tamanho de fonte inicial em pixels

    // Função para aumentar o tamanho da fonte
    function increaseFontSize() {
        currentFontSize += 2;
        updateFontSize();
    }

    // Função para diminuir o tamanho da fonte
    function decreaseFontSize() {
        if (currentFontSize > 10) { // Define um limite mínimo para a fonte
            currentFontSize -= 2;
            updateFontSize();
        }
    }

    // Função para aplicar o novo tamanho da fonte aos elementos
    function updateFontSize() {
        textElements.forEach(function(element) {
            element.style.fontSize = currentFontSize + "px";
        });
    }

    // Eventos de clique para os botões
    increaseFontBtn.addEventListener("click", increaseFontSize);
    decreaseFontBtn.addEventListener("click", decreaseFontSize);
});