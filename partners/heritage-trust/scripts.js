
console.log("Script v1.04");

setInterval( updateNextSectionLink, 10000 );

function updateNextSectionLink() {
  let nextSectionPropertyLink = document.querySelector('.parent-page__sections .notion-page__properties a');
  
  if( nextSectionPropertyLink ) {
    document.querySelector('#block-654a072579f848d886552673fee42cb4 a').href = nextSectionPropertyLink.href;
    console.log("Next Section link updated.");
  } else {
    console.log("No update needed.");
  }

}