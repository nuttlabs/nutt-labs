
console.log("Script v1.05");

setInterval( updateNextSectionLink, 10000 );

function updateNextSectionLink() {
  let nextSectionPropertyLink = document.querySelector('.parent-page__sections .notion-page__properties a');
  
  if( nextSectionPropertyLink ) {
    let nextSectionLink = document.querySelector('#block-654a072579f848d886552673fee42cb4 a')
    nextSectionLink.href = nextSectionPropertyLink.href;
    nextSectionLink.removeAttribute('target');
    console.log("Next Section link updated.");
  } else {
    console.log("No update needed.");
  }

}