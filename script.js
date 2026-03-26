function showSection(id){
    document.querySelectorAll("section").forEach(sec=>{
        sec.classList.remove("active");
    });

    const section = document.getElementById(id);

    setTimeout(()=>{
        section.classList.add("active");

        const elements = section.querySelectorAll(".animate");

        elements.forEach((el, index)=>{
            setTimeout(()=>{
                el.classList.add("show");
            }, index * 150);
        });

    },100);
}
