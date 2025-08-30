

let len_username = document.querySelector(".username")
let len_password = document.querySelector(".password")


let input_username = document.querySelector('.username-validation')
let input_password = document.querySelector(".password-validation")


function usernameValidation(){
    // alert("username")
    if(len_username.value.length < 12){
        input_username.style.color = 'red'
        input_username.innerHTML = 'must contation 12 caracter(Min)'
        input_username.style.display = 'block'
    }
    else{
        // input_username.style.color = 'green'
        // input_username.innerHTML = 'correct username value'
        input_username.style.display = 'none'
    }
}

function passwordValidation(){
    if(len_password.value.length < 8){
        input_password.style.color = 'red'
        input_password.innerHTML = 'must contation 8 caracter(Min)'
        input_password.style.display = 'block'
    }
    else{
        input_password.style.color = 'green'
        input_password.innerHTML = 'correct username value'
        input_password.style.display = 'block'
    }
}