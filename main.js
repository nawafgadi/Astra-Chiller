document.addEventListener("DOMContentLoaded", function(){
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    const displayname = document.getElementById('display-name');
    const displaypass = document.getElementById('display-pass');
    
    displayname.textContent = `nama :${username}`;
    displaypass.textContent = `password :${password}`;

})