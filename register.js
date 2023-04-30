const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const password = document.getElementById('pwd')
const password2 = document.getElementById('pwd2')
const tel = document.getElementById('tel')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

function ContainsNumbers(str){
    for (i = 0; i < str.length; i++){
        if(str[i] < 65 || (str[i] < 97 && str[i] > 90) || str[i] > 122){
            return true;
        }
    }
    return false;
}

function ContainsOnlyNumbers(str){
    for(i = 0; i < str.length; i++){
        if(str[i] < 48 || str[i] > 57){
            return false;
        }
    }
    return true;
}

form.addEventListener('submit', (e) => {
    let messages = []

    if(ContainsNumbers(fname.value)){
        messages.push('First name cannot contain invalid characters')
    }

    if(ContainsNumbers(lname.value)){
        messages.push('Last name cannot contain invalid characters')
    }

    if (password.value.length <= 6){
        messages.push("Password must be longer than 6 characters ")
    }

    if(password.value.length >= 20){
        messages.push('Password must be less than 20 characters')
    }

    if(password.value != password2.value){
        messages.push('Password does not match')
    }

    if(ContainsOnlyNumbers(tel.value)){
        messages.push("Phone number contains invalid characters")
    }

    if(tel.value.length != 10){
        messages.push("Invalid phone number")
    }

    if(messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(' *** ')
    }
    fetch('/form',{params:{fname: fname, lname: lname, email: email, uname: uname, pwd: pwd}}, (resp)=>{
        if(resp) {
            console.log("New user has been created");
            redirect('home.html');
        }
    })
    //alert(message);
})