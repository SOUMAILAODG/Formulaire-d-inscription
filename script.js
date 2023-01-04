// la recuperation des identifiants
const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
 

// evenements
form.addEventListener("sumbit",e=>{
    e.preventDefault();

    formverify()
})

// les fonctions
function formverify() {
    // obtenir les valeurs des inputs
    const userValue = username.value.trim();
    const emaiValue = email.value.trim();
    const pwdValue = password. value.trim();
    const pwd2Value = password2. value.trim();

    // username verify
    if(username===""){
        let message ="Username ne doit pas être vide";
        setError(username,message);

    }
}

function setError(elem,messsage) {
    const formControl = elem.parentElement ;
    const small = formControl.querySelector("small");
    
    // ajout du message d'erreur
    small.innertText=messsage;

    // ajout de la classe d'erreur
    formControl.className="form-contol error";
}