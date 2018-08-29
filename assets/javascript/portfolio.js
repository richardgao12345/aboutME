var curItem = 0;
document.addEventListener('DOMContentLoaded',function(event){
    	
    var firstLoad = document.getElementById("Education")
    firstLoad.style.background = "Gainsboro";

});

function changeElement(elem, clicked) {
   
    switch (curItem) {
        case 0:
            if(elem.getAttribute("id") == "Education") {
                return;
            }
            document.getElementById("Education").style.background = "";
            break;      
        case 1:
            if(elem.getAttribute("id") == "Experience") {
                return;
            }
            document.getElementById("Experience").style.background = "";
            break;  
        case 2:
            if(elem.getAttribute("id") == "Projects") {
                return;
            }
            document.getElementById("Projects").style.background = "";
            break;    
    }
    elem.style.background = "Gainsboro";
    curItem = Number(clicked)

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
        case "home":
            window.location.href = "//richardgao12345.github.io/aboutMe";
            break;
    }
}
