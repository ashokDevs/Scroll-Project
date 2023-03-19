const nav=document.querySelector("ul");
const div=document.querySelector(".top");
const ul=document.querySelector("ul");
const a=document.querySelectorAll("a");
const yo=document.querySelector("#toggleButton");
const upBtn=document.querySelector("#upLink");



{
    window.addEventListener("scroll", ()=>{
        const scrollheight=  window.pageYOffset;
        const linkHeight=ul.getBoundingClientRect().height;
        const body=document.querySelector("body").clientWidth;
        if(body>500){
            if(scrollheight>linkHeight){
                ul.classList.add("navFix")
                a.forEach(element => {
                    element.style.color="black";
                });
                
            }else {
                
                ul.classList.remove("navFix");
                div.style.backgroundColor="";
                a.forEach(element => {
                    element.style.color="white";
                });
            }

            if(scrollheight>200){
                upBtn.style.visibility="visible";
            }else{
                upBtn.style.visibility="hidden";

            }
        }
            
    })
}
yo.addEventListener("click", ()=>{
    
    ul.classList.toggle("show")
    
})