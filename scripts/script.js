
function init() {
    
    document.addEventListener("contextmenu", function(evt) {
       evt.preventDefault(); 
    });
    
}

document.addEventListener('DOMContentLoaded', init, false);