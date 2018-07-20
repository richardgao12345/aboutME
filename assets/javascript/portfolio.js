var modals = document.getElementsByClassName("box")
var expandedModal = document.createElement('div')
expandedModal.setAttribute('id', 'expandedModal')
document.body.appendChild(expandedModal)
var fullModal = document.getElementById('expandedModal');
fullModal.style.position = "absolute";
var position = {}
var size = {}
var curModal = -1;


var expandBox = function(event) {
    var currentModal = event.currentTarget;
    var classList = currentModal.classList;
    for(var i = 0; i < classList.length; i++) {
        if (classList[i] == 'education') {
            curModal = 0;
            break;
        }
        if (classList[i] == 'projects') {
            curModal = 1;
            break;
        }
    }
    position = currentModal.getBoundingClientRect()
    
}
for (var i = 0; i < modals.length; i++) {
    modals[i].addEventListener("click", expandBox)
}