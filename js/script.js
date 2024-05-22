document.addEventListener("DOMContentLoaded", function() {
    const elemento = document.getElementById("offcanvasScrolling");
       
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    
    function handleMediaQueryChange(e) {
        if (e.matches) {
            elemento.classList.remove("show");
            
        } else {
            elemento.classList.add("show");
            
        }
    }

   
    mediaQuery.addListener(handleMediaQueryChange);

   
    handleMediaQueryChange(mediaQuery);
});