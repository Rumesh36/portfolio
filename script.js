function sidebar(){
    const sidebar=document.querySelector(".hambar");
        sidebar.style.display='flex';
    }
    function closebar(){
        const closebar = document.querySelector(".hambar");
        closebar.style.display="none";
    }
    let r=document.querySelector(".ham");
    let ul=document.querySelector(".hambar");
    if(ul=="flex"){
        r.style.display="none";
    }