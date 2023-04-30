document.addEventListener('load', ()=>{
    fetch('/login.html', (resp)=>{
        let wlcm = document.getElementById('wlcm');
        wlcm.innerHTML('Welcome' + resp);
    })
    let products = document.getElementById('products')
})
