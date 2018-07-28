var modals = document.getElementsByClassName("box")
var expandedModal = document.createElement('div')
expandedModal.setAttribute('id', 'expandedModal')
document.body.appendChild(expandedModal)
var fullModal = document.querySelector('#expandedModal');
fullModal.style.position = "absolute";
var position = {}
var size = {}
var curModal = -1;
//javascript function to expand the box
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
    position = currentModal.getBoundingClientRect()
	fullModal.style.top = position.top + 'px';
	fullModal.style.left = position.left + 'px';
	fullModal.style.height = size.height;
	fullModal.style.width = size.width;
    fullModal.style.margin = currentModal.style.margin;
    
    setTimeout(function(){
		fullModal.innerHTML = currentModal.innerHTML;
		var classes = currentModal.classList.value.split(' ');
		for (var i = 0; i < classes.length; i++) {
			fullModal.classList.add(classes[i]);
        }
        fullModal.style.position = "absolute";
		fullModal.classList.add('growing');
		fullModal.style.height = '80vh';
		fullModal.style.width = '80vw';
		fullModal.style.top = '5%';
		fullModal.style.left = '10%';
        fullModal.style.margin = '0';
        fullModal.style.textAlign = 'center';
    }, 1);
    setTimeout(function(){
		fullModal.classList.remove('growing');
        fullModal.classList.add('full-screen');
    }, 1000);
    $('#grayout').fadeIn(800);

    
}

//javscript function to close the box
var closeBox = function(event) {
    var $this = event.currentTarget;
	$this.style.height = size.height;
	$this.style.width = size.width;
	$this.style.top = position.top + 'px';
	$this.style.left = position.left + 'px';
	$this.style.margin = '0';
	$this.classList.remove('full-screen');
	$this.classList.add('shrinking');
	
	setTimeout(function(){
		while($this.firstChild) {
            $this.removeChild($this.firstChild);
        }
		var classList = $this.classList;
		while (classList.length > 0) {
			 classList.remove(classList.item(0));
		}
        $this.style = '';
    }, 1000);
    $('#grayout').fadeOut(800);
}

function linkClick(someID) {
    switch (someID){
        case "mail":
            window.location.href = "mailto:rtrgao@ucdavis.edu";
            break;
        case "linkedin":
            window.location.href = "//www.linkedin.com/in/richard-gao12345";
            break;
        case "github":
            window.location.href = "//www.github.com/richardgao12345";
            break;
    }
}

for (var i = 0; i < modals.length; i++) {
    modals[i].addEventListener("click", expandBox);
}

fullModal.addEventListener("click", closeBox);
