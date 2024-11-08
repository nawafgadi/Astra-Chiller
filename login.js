function kirimData() {
    // Mengambil nilai dari input
    const nama = document.getElementById('nama').value;
    const password = document.getElementById('password').value;
    const alamat = document.getElementById('alamat').value;

    // Menyimpan data menggunakan localStorage
    localStorage.setItem('username', nama);
    localStorage.setItem('password', password);
    localStorage.setItem('alamat', alamat);

    // Menampilkan pesan konfirmasi
    alert('Login sukses:\nNama: ' + nama + '\nPassword: ' + password + '\nAlamat: ' + alamat);

    // Mengalihkan ke URL yang diinginkan
    window.location.href = "landingpage.html";
    
    return false; // Mencegah pengiriman form secara default
}
function hideseek() {

    var password = document.getElementById("password");
    if (password.type == "password") {
        password.type = "text";
    }
    else {
        password.type = "password";
    }
}