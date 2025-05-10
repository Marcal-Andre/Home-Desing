// Seleciona todos os links do cabeçalho
const headerLinks = document.querySelectorAll('header a');

// Adiciona um evento de clique a cada link
headerLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Evita o comportamento padrão do link

        // Obtém o ID da seção correspondente a partir do atributo href
        const sectionId = link.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);

        // Rola suavemente até a seção correspondente
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Seleciona o botão de voltar ao topo
const backToTopButton = document.getElementById('back-to-top');
// Adiciona um evento de clique ao botão