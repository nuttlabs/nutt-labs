
setInterval( updateNextSectionLink, 10000 );

setInterval( () => {
    console.log("Iteration");
}, 3000);

function updateNextSectionLink() {
  let nextSectionPropertyLink = document.querySelector('.parent-page__sections .notion-page__properties a');
  
  if( nextSectionPropertyLink ) {
    console.log(nextSectionPropertyLink.href);
  } else {
    console.log("Nevermind.");
  }
}