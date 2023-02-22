function formulario(){
    
    window.location.href="./formulario.html"
}

function regresar(){
    
    window.location.href="./index.html"
}


const form = document.getElementById("MY_FORM")

form.addEventListener("submit", (e) => 
{
    e.preventDefault()
    const nameP = document.getElementById("NAME_INPUT").value
    const lastnameP = document.getElementById("LASTNAME_INPUT").value
    const rut = document.getElementById("RUT_INPUT").value
    const email = document.getElementById("EMAIL_INPUT").value
    const password = document.getElementById("PASSWORD_INPUT").value
   
    alert("Formulario Enviado, Gracias!")
    window.location.href="./index.html"
})

