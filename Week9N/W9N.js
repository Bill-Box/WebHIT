
const ct = document.querySelector(".content");
const cttext = content.textContent;
const pr =cttext.length > 40 ? contente.slice(0, 40) + "..." : cttext;
const button = document.querySelector(".clickk");
ct.textContent = pr;
let fa = true;
button.addEventListener("click", () => {
    if(fa){
        
        ct.textContent = cttext;
         button.textContent = "Rut GOn";
    }
    else{
       
        ct.textContent = pr;
         button.textContent = "Rut GOn";
        fa != fa;
    }

});