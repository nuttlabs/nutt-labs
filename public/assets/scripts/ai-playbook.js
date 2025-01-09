document.querySelectorAll('.pillar').forEach(pillar => {

    let contentDiv = pillar.querySelector('.pillar__content');
    let arrow = pillar.querySelector('.pillar__arrow');
    
    let scrollHeight = prepScrollHeight(contentDiv);


    pillar.addEventListener('click', () => {
        toggleContentDiv(contentDiv, scrollHeight, arrow);
    })
})

function prepScrollHeight(contentDiv) {

    const scrollHeight = contentDiv.scrollHeight;
    contentDiv.setAttribute('data-scrollHeight', scrollHeight);
    contentDiv.style.height = '0px';
    contentDiv.style.position = 'static';
    contentDiv.style.opacity = '1';

    return scrollHeight;

}

function toggleContentDiv(contentDiv, scrollHeight, arrow) {

    let newHeight = 0;
    let rotation = 0;

     if(contentDiv.style.height == '0px') {
        newHeight = scrollHeight;
        rotation = 90;
     }

     contentDiv.style.height = newHeight + 'px';
     arrow.style.rotate = rotation + 'deg';

}