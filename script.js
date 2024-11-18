function sidebar(){
    const sidebar=document.querySelector(".hambar");
    const ham=document.querySelector(".ham");
        sidebar.style.display='flex';
        ham.style.display="none";
        
    }
    function closebar(){
        const closebar = document.querySelector(".hambar");
        const ham=document.querySelector(".ham");
        closebar.style.display="none";
        ham.style.display="flex";    
    }
    function itemClick(){
        const sidebar=document.querySelector(".hambar");
        const ham=document.querySelector(".ham");
        sidebar.style.display="none";
        ham.style.display="flex";
    }