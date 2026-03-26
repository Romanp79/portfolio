// LOADER
window.onload = function(){
    document.getElementById("loader").style.display="none";

    // show animation for first section
    activateAnimations(document.querySelector(".active"));
}

// FUNCTION TO ACTIVATE ANIMATION
function activateAnimations(section){
    const elements = section.querySelectorAll(".animate");

    elements.forEach((el, index)=>{
        setTimeout(()=>{
            el.classList.add("show");
        }, index * 150);
    });
}

// SECTION SWITCH
function showSection(id){
    document.querySelectorAll("section").forEach(sec=>{
        sec.classList.remove("active");
    });

    const section = document.getElementById(id);
    section.classList.add("active");

    // reset animations
    section.querySelectorAll(".animate").forEach(el=>{
        el.classList.remove("show");
    });

    activateAnimations(section);
}

// CURSOR
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e=>{
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
});
