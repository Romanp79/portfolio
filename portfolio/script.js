function showSection(id){
    document.querySelectorAll("section").forEach(sec=>{
        sec.classList.remove("active");
    });

    setTimeout(()=>{
        document.getElementById(id).classList.add("active");
    },100);
}