const { redirect } = require("statuses");

let log = document.getElementById('login-btn')

log.addEventListener('click', ()=>{
    let uname = document.getElementById('uname').value;
    let password = document.getElementById('pwd').value();
    fetch('/login.html',{params:{u: uname, p: password}}, (resp)=>{
        if(resp) redirect('home.html')
        else{
            alert("Username or password incorrect");
        }
    })
})

