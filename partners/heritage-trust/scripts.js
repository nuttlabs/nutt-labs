
console.log("Script v1.02");

setInterval( () => {
    console.clear();
}, 5000);

setInterval( updateNextSectionLink, 10000 );

function updateNextSectionLink() {
  let nextSectionPropertyLink = document.querySelector('.parent-page__sections .notion-page__properties a');
  
  if( nextSectionPropertyLink ) {
    console.log(nextSectionPropertyLink.href);
  } else {
    console.log("Nevermind.");
  }
}