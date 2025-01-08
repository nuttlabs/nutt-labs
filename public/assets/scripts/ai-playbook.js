document.querySelectorAll('.pillar').forEach(pillar => {
    pillar.addEventListener('click', () => {
        pillar.toggleAttribute('expanded');
    })
})