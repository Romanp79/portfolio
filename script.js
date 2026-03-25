function showSection(id){
    document.querySelectorAll("section").forEach(sec=>{
        sec.classList.remove("active");
    });

    setTimeout(()=>{
        const section = document.getElementById(id);
        section.classList.add("active");

        // trigger fade animation
        section.querySelectorAll("div, p, h3").forEach(el=>{
            el.classList.add("fade");
            setTimeout(()=>{
                el.classList.add("show");
            },100);
        });

    },100);
}
