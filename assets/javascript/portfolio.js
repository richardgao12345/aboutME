var modals = document.getElementsByClassName("box")
var expandedModal = document.createElement('div')
expandedModal.setAttribute('id', 'expandedModal')
document.body.appendChild(expandedModal)
var fullModal = document.querySelector('#expandedModal');
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
    size = {
		width: window.getComputedStyle(currentModal).width,
		height: window.getComputedStyle(currentModal).height
    }
    console.log(size)
    position = currentModal.getBoundingClientRect()
	fullModal.style.top = position.top + 'px';
	fullModal.style.left = position.left + 'px';
	fullModal.style.height = size.height;
	fullModal.style.width = size.width;
    fullModal.style.margin = currentModal.style.margin;
    
    setTimeout(function(){
        console.l
		fullModal.innerHTML = currentModal.innerHTML;
		var classes = currentModal.classList.value.split(' ');
		for (var i = 0; i < classes.length; i++) {
			fullModal.classList.add(classes[i]);
        }
        fullModal.style.position = "absolute";
		fullModal.classList.add('growing');
		fullModal.style.height = '100vh';
		fullModal.style.width = '100vw';
		fullModal.style.top = '0';
		fullModal.style.left = '0';
        fullModal.style.margin = '0';
        console.log(fullModal)
    }, 1);
    setTimeout(function(){
		fullModal.classList.remove('growing');
		fullModal.classList.add('full-screen')
	}, 1000);
    
}
for (var i = 0; i < modals.length; i++) {
    modals[i].addEventListener("click", expandBox)
}