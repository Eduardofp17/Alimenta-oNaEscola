let senha1 = document.querySelector("#pass");
let senha2 = document.querySelector("#pass2");
let errorArea = document.querySelector(".ErrorArea");
let button = document.querySelector(".entrar");

function verificaSenhas(evt){
   
    
    console.log(senha1.value)
    if(senha1.value != senha2.value){
        errorArea.classList.add("AlertError");
        errorArea.innerHTML = "As senhas estão diferentes";
        evt.preventDefault()
    }
}
button.addEventListener("click", verificaSenhas);
